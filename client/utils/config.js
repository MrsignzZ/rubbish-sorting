module.exports = {
  appkey: '9b7c662a61f22c1e6b916ea40479a68d',
  neuhubTextUrl: 'https://aiapi.jd.com/jdai/garbageTextSearch',
  neuhubImageUrl: 'https://aiapi.jd.com/jdai/garbageImageSearch',
  textUrl: 'http://api.tianapi.com/txapi/lajifenlei/index',
  imageUrl: 'http://api.tianapi.com/txapi/imglajifenlei/index',
  trashTypeMap: {
    "beijing": [
      {
        name: '可回收垃圾',
        img: '/assets/image/recyclable.png',
        explain: "可回收垃圾是指适宜回收、可循环利用的生活废弃物。",
        contain: "常见包括各类废金属、玻璃瓶、易拉罐、饮料瓶、塑料玩具、书本、报纸、广告单、纸板箱、衣服、床上用品、电子产品等"
      },
      {
        name: '有害垃圾',
        img: '/assets/image/hazardous.png',
        explain: "有毒有害垃圾是指存有对人体健康有害的重金属、有毒的物质或者对环境造成现实危害或者潜在危害的废弃物。",
        contain: "常见包括废电池、废荧光灯管、废灯泡、废水银温度计、废油漆桶、过期药品、农药、杀虫剂等。",
      },
      {
        name: '厨余垃圾',
        img: '/assets/image/food.png',
        explain: "厨余垃圾是指居民日常生活及食品加工、饮食服务、单位供餐等活动中产生的垃圾。",
        contain: "常见包括菜叶、剩菜、剩饭、果皮、蛋壳、茶渣、骨头等",
      },
      {
        name: '其他垃圾',
        img: '/assets/image/residual.png',
        explain: '指除可回收物、有害垃圾、厨余垃圾（湿垃圾）以外的其它生活废弃物',
        contain: '常见包括砖瓦陶瓷、渣土、卫生间废纸、猫砂、污损塑料、毛发、硬壳、一次性制品、灰土、瓷器碎片等难以回收的废弃物'
      }
    ],
    "shanghai": [
      {
        name: '可回收垃圾',
        img: '/assets/image/recyclable.png',
        explain: "可回收垃圾是指适宜回收、可循环利用的生活废弃物。",
        contain: "常见包括各类废金属、玻璃瓶、易拉罐、饮料瓶、塑料玩具、书本、报纸、广告单、纸板箱、衣服、床上用品、电子产品等"
      },
      {
        name: '有害垃圾',
        img: '/assets/image/hazardous.png',
        explain: "有毒有害垃圾是指存有对人体健康有害的重金属、有毒的物质或者对环境造成现实危害或者潜在危害的废弃物。",
        contain: "常见包括废电池、废荧光灯管、废灯泡、废水银温度计、废油漆桶、过期药品、农药、杀虫剂等。",
      },
      {
        name: '湿垃圾',
        img: '/assets/image/food.png',
        explain: "指易腐的生物质废弃物。。",
        contain: "主要包括剩菜剩饭、瓜皮果核、花卉绿植、肉类碎骨、过期食品、餐厨垃圾等;",
      },
      {
        name: '干垃圾',
        img: '/assets/image/residual.png',
        explain: '指除可回收物、有害垃圾、厨余垃圾（湿垃圾）以外的其它生活废弃物',
        contain: '常见包括砖瓦陶瓷、渣土、卫生间废纸、猫砂、污损塑料、毛发、硬壳、一次性制品、灰土、瓷器碎片等难以回收的废弃物'
      }
    ],
  }
}