// components/identify.js
import http from "../../utils/api";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cityIndex: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    identifications: [
      {
        url: '../../assets/image/camera.png',
        name: '拍照识别'
      },
      {
        url: '../../assets/image/voice.png',
        name: '语音搜索'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(event) {
      const name = event.currentTarget.dataset.name
      if (name === '拍照识别') {
        console.log('take photos')
        wx.chooseImage({
          success: res => {
            wx.getFileSystemManager().readFile({
              filePath: res.tempFilePaths[0], //选择图片返回的相对路径
              encoding: 'base64', //编码格式
              success: res => { //成功的回调
                console.log('成功上传图片')
                console.log(res)
                console.log(res.data)
                http.garbageImageSearch({
                  data: {
                    key: 'e005d87419cc79bbba945014010b7359',
                    mode: 1,
                    "img": res.data
                  }
                }).then(res => {
                  console.log(res) // res[0]为目标数据
                  // app.globalData.trashData = res[0]
                  this.triggerEvent('updateTrashData', {
                    data: res[0]
                  })
                })
              }
            })
          }
        })
      } else {
        console.log('voice')
        
        console.log(this.data.cityIndex)
        wx.navigateTo({
          url: `/pages/voice/voice?cityIndex=${this.data.cityIndex}`
        })
      }
      
    }
  }
})
