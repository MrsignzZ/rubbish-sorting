// components/hot-search/hot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [],
    showHistory: false
  },
  attached() {
    let list = wx.getStorageSync('HOT_SEARCH')
    if (list.length > 0) {
      this.setData({
        list,
        showHistory: true
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
