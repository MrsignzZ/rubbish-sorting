

module.exports = {
  http(url, method, isJson, params) {
    // let key = 'e005d87419cc79bbba945014010b7359' // 获取token，自行获取token和签名，token和签名表示每个接口都要发送的数据
    // let mode = 1 // 获取签名
    // let data = {
    //   key,
    //   mode
    // }
    // if (params.data) { // 在这里判断一下data是否存在，params表示前端需要传递的数据，params是一个对象，有三组键值对，data：表示请求要发送的数据，success：成功的回调，fail：失败的回调，这三个字段可缺可无，其余字段会忽略
    //   for (let key in params.data) { // 在这里判断传过来的参数值为null，就删除这个属性
    //     if (params.data[key] == null || params.data[key] == 'null') {
    //       delete params.data[key]
    //     }
    //   }
    //   data = { ...data, ...params.data }
    // }
    let data = { ...params.data }
    console.log('data', data)
    return new Promise((resolve, reject) => {
      let type = 'application/json'
      if (!isJson) {
        type = 'application/x-www-form-urlencoded'
      }
      wx.request({
        url, // 就是拼接上前缀,此接口域名是开放接口，可访问
        method,
        data,
        header: {
          'content-type': type
        },
        success(res) {
          if (res.statusCode == 200 && res.data.code == 200) {
            resolve(res.data.newslist);
          } else {
            resolve(res.data)
          }
          
        },
        fail(res) {
          reject(res.msg)
        }
      })
    })
    
  }
}
