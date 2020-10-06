// pages/wxml/wxml.js
Page({
  data: {
    age: 18,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    nums: [
      [1, 5, 3, 5],
      [5, 3, 7, 9],
      [1, 5, 8, 9]
    ]
  },
  handleClickColor() {
    console.log('---')
    this.setData({
      isActive: !this.data.isActive
    })
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    })
  }
})