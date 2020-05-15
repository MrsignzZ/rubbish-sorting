// pages/search.js
import http from '../../utils/api'
import { setStorage } from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    account: '',
    password: '',
    city: '',
    array: ['北京', '上海']
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
  nameInput(e) {
    this.setData({
      name: e.detail.value
    })
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
  radioChange(e) {
    console.log(e.detail.value)
    this.setData({
      city: e.detail.value
    })
  },
  register() {
    console.log(this.data)
    const data = this.data
    http.register({
      data: {
        name: data.name,
        account: data.account,
        password: data.password,
        city: data.city,
      }
    }).then(res => {
      console.log(res)
      if (res.account) {
        console.log('注册成功')
        wx.showToast({
          title: '注册成功'
        })
        setTimeout(() => {
          wx.hideToast()
          wx.redirectTo({
            url: '/pages/login/login'
          })
        }, 1500);
      } else {
        wx.showToast({
          title: '用户已存在,请重新输入',
          icon: 'none'
        })
        setTimeout(() => {
          wx.hideToast()
        }, 1500);
      }
    })
    // http.login({
    //   data: {
    //     "account": this.data.account,
    //     "password": this.data.password
    //   }
    // }).then(res => {
    //   console.log(res.token)// token
    //   setStorage('TOKEN', res.token)
    //   wx.showToast({
    //     title: '登录成功'
    //   })
    //   setTimeout(() => {
    //     wx.hideToast()
    //     wx.redirectTo({
    //       url: '/pages/question/question'
    //     })
    //   }, 1500);
    // })

  }
})