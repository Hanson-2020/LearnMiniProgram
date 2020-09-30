//app.js
App({
  // 生命周期: 后台存活两个小时
  //小程序初始化完成时，会执行的生命周期函数
  onLaunch: function () {
    // console.log('小程序初始化完成了： onLaunch')
    // setTimeout(() => {
    //   //测试onError周期函数用的.
    //   // const err = new err();
    //   // return err;
    // }, 3000);
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options) {
    // console.log('界面显示出来: onShow')
    //1.判断小程序进入的场景
    console.log(options.scene)
    switch (options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }
  },
  // 2.获取用户信息
  // wx.getUserInfo({
  //   success: function(res) {
  //     console.log(res)
  //   }
  // })
  //界面被隐藏起来的时候执行
  onHide: function () {
    console.log('界面隐藏: onHide')
  },
  // 程序发生错误时
  onError: function (err) {
    console.log('报错: onError')
  },
  globalData: {
    userInfo: null,
    name: 'Hanson',
    age: 18
  }
})