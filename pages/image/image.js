// pages/image/image.js
Page({
  data: {
    imagePath: ''
  },
  handleClick() {
    // console.log('----')
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        const path = res.tempFilePaths[0]
        this.setData({
          imagePath: path
        })
      }
    })
  },
  handleClickLoader() {
    console.log('图片加载完成')
  }
})