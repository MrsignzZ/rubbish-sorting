// pages/search.js
const plugin = requirePlugin("WechatSI")
let manager = plugin.getRecordRecognitionManager()
let cityIndex;
manager.onRecognize = function (res) {
  console.log("current result", res.result)
  if (res.result) {
    wx.redirectTo({
      url: `/pages/search/search?query=${res.result}&cityIndex=${cityIndex}`
    })
  }
}
manager.onStop = function (res) {
  console.log("record file path", res.tempFilePath)
  console.log("result", res)
}
manager.onStart = function (res) {
  console.log("成功开始录音识别", res)
}
manager.onError = function (res) {
  console.error("error msg", res.msg)
}
// manager.start({ duration: 30000, lang: "zh_CN" })

Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: ''
  },
  onLoad: function (option) {
    console.log('option', option)
    if (option.cityIndex) {
      cityIndex = option.cityIndex
      this.setData({
        code: option.cityIndex
      })
    }
  },
  touchStart() {
    console.log('start')
    manager.start({ duration: 30000, lang: "zh_CN" })
    wx.showLoading({
      title: '录音中'
    })
  },
  touchEnd() {
    wx.hideLoading()
    manager.stop()
    console.log('end')
  }
})