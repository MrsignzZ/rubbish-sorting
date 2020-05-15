// pages/search.js
import http from '../../utils/api'
import { setStorage } from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  phoneInput(e) {
    this.setData({
      account: e.detail.value
    })
  },
  passwordInput(e) {
    this.setData({
      password: e.detail.value
    })
  },
  login() {
    console.log(this.data.account)
    console.log(this.data.password)
    http.login({
      data: {
        "account": this.data.account,
        "password": this.data.password
      }
    }).then(res => {
      console.log(res.token)// token
      setStorage('TOKEN', res.token)
      wx.showToast({
        title: '登录成功'
      })
      setTimeout(() => {
        wx.hideToast()
        wx.redirectTo({
          url: '/pages/question/question'
        })
      }, 1500);
    })

  },
  register() {
    wx.redirectTo({
      url: '/pages/register/register'
    })
  }
  
})