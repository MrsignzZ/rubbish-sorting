function setStorage (key, value) {
  let hot = wx.getStorageSync(key)
  if (hot) {
    wx.setStorage({
      key: key,
      data: unique([...hot, value])
    })
  } else {
    wx.setStorage({
      key: key,
      data: [value]
    })
  }
}

function getStorage(key) {
  return wx.getStorageSync(key)
}

function unique (arr){
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  return [...new Set(arr)]
}

module.exports = {
  setStorage,
  getStorage,
  unique
}