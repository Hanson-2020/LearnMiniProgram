// pages/detail/detail.js
Page({
  data: {

  },
  onLoad: function (options) {
    console.log(options)
  },
  onUnload: function() {
    // 1.获取首页的页面对象
    // getCurrentPage当前所有栈的页面
    const pages = getCurrentPages();
    // 拿到数组第一个
    const home = pages[pages.length -2];
    home.setData({
      title: 'I am Hanson!'
    })
  }
})