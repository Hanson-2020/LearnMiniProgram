Page({
  onToastClick() {
    wx.showToast({
      title: '等待一下',
      // 时间
      duration: 3000,
      icon: 'loading',
      // 加一层蒙版，防止点击此按钮后还可以点击其他按钮
      mask: true,
      success: function() {
        console.log('展示成功')
      },
      fail: function() {
        console.log('展现失败')
      },
      complete: function() {
        console.log('完成函数的调用')
      }
    })
  },
  onModalClick() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      // 是否显示取消的
      showCancel: true,
      cancelText: '退出',
      cancelColor: 'red',
      success: function(res) {
        console.log(res)
        if(res.confirm) {
          console.log('用户点击了确定')
        }
        if(res.cancel) {
          console.log('用户点击了退出')
        }
      }
    })
  },
  onLoadingClick() {
    wx.showLoading({
      title: '等待中',
      // 加一层蒙版，防止点击此按钮后还可以点击其他按钮
      mask: true,
    })
    setTimeout(() => {
      //必须调用隐藏方法才能让loading方法消失
        wx.hideLoading()
    }, 2000);
  },
  onActionSheeClick() {
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: '#ff0000',
      success: function(res) {
        console.log(res)
      }
    })
  },
  // 分享函数
  onShareAppMessage: function() {
    return{
      title: 'Hanson',
      path: '/pages/index/index',
      imageUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3682983012,853466614&fm=26&gp=0.jpg'
    }
  }
})
