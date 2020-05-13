//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgSrc: ['/assets/image/swiper-img_1.png', '/assets/image/swiper-img_1.png', '/assets/image/swiper-img_1.png'],
  },
  take: function () {
    wx.chooseImage({
      success: res => {
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0], //选择图片返回的相对路径
          encoding: 'base64', //编码格式
          success: res => { //成功的回调
            console.log(res.data)
          }
        })
      }
    })
  },
  goTOSearch() {
    wx.navigateTo({
      url: '../search/search'
    })
  }
})
