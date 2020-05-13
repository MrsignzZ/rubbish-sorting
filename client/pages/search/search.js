// pages/search.js
import http from '../../utils/api'
import { trashTypeMap } from "../../utils/config";
// import { setStorage, getStorage } from "../../utils/util";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['北京', '上海'],
    index: 0,
    showItem: false,
    inputValue: '',
    name: '',
    type: '',
    tip: '',
    contain: '',
    explain: '',
    itemImg: '/assets/image/food.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log('onload query', option)
    if (option.query) {
      this.setData({
        inputValue: option.query,
        index: option.cityIndex
      })
      this.search()
    }
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  search() {
    console.log(this.data.inputValue)
    console.log('search')
    http.findTrashByName({ // 查询本地数据库
      data: {
        name: this.data.inputValue,
        city: this.data.array[this.data.index]
      }
    }).then(res => {
      console.log(res)
      if (res.type) {
        console.log('走到这里')
        this.getRealData1(res)
      } else { // 本地数据为空时查询api接口
        http.garbageTextSearch({
          data: {
            key: 'e005d87419cc79bbba945014010b7359',
            mode: 1,
            "word": this.data.inputValue,
          }
        }).then(res => {
          console.log(res[0])
          this.getRealData1(res[0])
          // 插入数据到本地数据库
          this.setTrash(res[0])
        })
      }
    })

    if (this.data.inputValue) {
      this.setStorage(this.data.inputValue)
      console.log(wx.getStorageSync('HOT_SEARCH'))
      // console.log('set success'
    }
  },
  // 处理数据 
  getRealData1(data) {
    let type, explain, contain, itemImg;
    console.log(this.data.index)
    if (this.data.index === 0) {
      console.log('beijing')
      type = trashTypeMap["beijing"][data.type].name
      explain = trashTypeMap["beijing"][data.type].explain
      contain = trashTypeMap["beijing"][data.type].contain
      itemImg = trashTypeMap["beijing"][data.type].img
    } else {
      console.log('shanghai')
      type = trashTypeMap["shanghai"][data.type].name
      explain = trashTypeMap["shanghai"][data.type].explain
      contain = trashTypeMap["shanghai"][data.type].contain
      itemImg = trashTypeMap["shanghai"][data.type].img
    }

    this.setData({
      showItem: true,
      name: data.name,
      tip: data.tip,
      type,
      explain,
      contain,
      itemImg
    })
  },

  getRealData2(data) {
    let type, explain, contain, itemImg;
    console.log(this.data.index)
    if (this.data.index === 0) {
      console.log('beijing')
      type = trashTypeMap["beijing"][data.lajitype].name
      explain = trashTypeMap["beijing"][data.lajitype].explain
      contain = trashTypeMap["beijing"][data.lajitype].contain
      itemImg = trashTypeMap["beijing"][data.lajitype].img
    } else {
      console.log('shanghai')
      type = trashTypeMap["shanghai"][data.lajitype].name
      explain = trashTypeMap["shanghai"][data.lajitype].explain
      contain = trashTypeMap["shanghai"][data.lajitype].contain
      itemImg = trashTypeMap["shanghai"][data.lajitype].img
    }

    this.setData({
      inputValue: data.name,
      showItem: true,
      name: data.name,
      tip: data.lajitip,
      type,
      explain,
      contain,
      itemImg
    })
  },
  setTrash(data) {
    http.createTrash({
      data: {
        name: data.name,
        type: data.type,
        city: this.data.array[this.data.index],
        tip: data.tip
      }
    }).then(res => {
      console.log('插入数据成功', res)
    })
  },

  getDataFromIdentify(data) {
    console.log(data.detail.data)
    const realData = data.detail.data
    this.getRealData2(realData);
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },


  setStorage(value) {
    let hot = wx.getStorageSync('HOT_SEARCH')
    if (hot) {
      wx.setStorage({
        key: 'HOT_SEARCH',
        data: this.unique([...hot, value])
      })
    } else {
      wx.setStorage({
        key: 'HOT_SEARCH',
        data: [value]
      })
    }
  },

  getStorage() {
    return wx.getStorageSync('HOT_SEARCH')
  },

  unique(arr) {
    if (!Array.isArray(arr)) {
      console.log('type error!')
      return
    }
    return [...new Set(arr)]
  }
})