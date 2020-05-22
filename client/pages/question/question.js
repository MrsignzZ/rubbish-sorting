// pages/search.js
import http from "../../utils/api";
import { setStorage, getStorage } from "../../utils/util";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    score: 0,
    questions: [],
    answer: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const token = getStorage('TOKEN')
    if (!token) {
      wx.redirectTo({
        url: '/pages/login/login'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    http.getQuestionsList({
      data: {}
    }).then(res => {
      console.log('res', res)
      this.setData({
        questions: res
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  handleTap(event) {
    console.log(this.data.questions[this.data.index])
    console.log('event', event)
    const currentData = this.data.questions[this.data.index]
    const handleAnswer = event.target.dataset.index
    const answer = currentData.answer
    if (handleAnswer === answer) {
      let score = this.data.score + currentData.score
      this.setData({
        score
      })
      wx.showToast({
        title: '回答正确',
        mask: true
      })
    } else {
      wx.showToast({
        title: '回答错误',
        icon: 'none',
        mask: true
      })
    }
    const _this = this
    setTimeout(function () {
      wx.hideToast()
      _this.next()
    }, 2000)
  },
  finish() {
    // storage 中获取rankid
    // http.updateScore('')

    const rankId = getStorage('RANK_ID')
    if (rankId) {
      console.log('rankId', rankId)
      http.updateScore(rankId, {
        data: {
          rank_score: this.data.score
        }
      }).then(res => {
        console.log('更新榜单成功', res)
      })
    } else {
      http.createRank({
        data: {
          rank_score: this.data.score
        }
      }).then(res => {
        // console.log('创建榜单成功', res)
        if(res.status === 409) {
          console.log(res.message)
        } else if(res._id) {
          console.log('创建榜单成功')
          setStorage('RANK_ID', res._id)
        }
      })
    }
    wx.showToast({
      title: '完成答题'
    })
    setTimeout(() => {
      wx.hideToast()
    }, 1500);
  },
  next() {
    let index = this.data.index
    if (index < this.data.questions.length - 1) {
      index++
    }
    this.setData({
      index,
    })
  },
  rank() {
    wx.navigateTo({
      url: '/pages/rank/rank'
    })
  }
})