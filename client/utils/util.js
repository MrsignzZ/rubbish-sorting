function setStorage (value) {
  let hot = wx.getStorageSync('HOT_SEARCH')
  if (hot) {
    wx.setStorage({
      key: 'HOT_SEARCH',
      data: unique([...hot, value])
    })
  } else {
    wx.setStorage({
      key: 'HOT_SEARCH',
      data: [value]
    })
  }
}

function getStorage() {
  return wx.getStorageSync('HOT_SEARCH')
}

function unique (arr){
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  return [...new Set(arr)]
}

export default {
  setStorage,
  getStorage,
  unique
}