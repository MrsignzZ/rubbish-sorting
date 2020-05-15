// pages/search.js
import http from "../../utils/api";
import { setStorage, getStorage } from "../../utils/util";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ranks: []
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
    http.getRank({
      data: {}
    }).then(res => {
      this.setData({
        ranks: res
      })
    })
    // http.getQuestionsList({
    //   data: {}
    // }).then(res => {
    //   console.log('res', res)
    //   this.setData({
    //     questions: res
    //   })
    // })
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
})