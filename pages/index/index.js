//index.js
// getApp()获取App()产生的示例对象
// const app = getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)
// const name = app.globalData.name;

Page({
  data: {
    name: 'Hanson',
    age: 22,
    students: [{
        id: " 0",
        name: 'Hanson',
        age: 12
      },
      {
        id: " 1",
        name: 'Alice',
        age: 14
      },
      {
        id: " 2",
        name: 'Black',
        age: 16
      },
    ],
    count: 0,
    list: []
  },

  //1.监听wxml中相关的一些事件
  hadnBtnAddClick() {
    //1.错误做法：界面是不会刷新的
    // this.data.count +=1;
    // console.log(this.data.count)
    // 2.this.setData()
    this.setData({
      count: this.data.count + 1
    })
  },
  hadnBtnSubClick() {
    this.setData({
      count: this.data.count - 1
    })
  },
  handleClickAgree(event) {
    console.log('---')
    console.log(event)
  },

  // 2.五大生命周期
  //页面被加载出来时
  onLoad() {
    console.log('onLoad')
    // 3.网络请求
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data.data.list;
        this.setData({
          list: data
        })
      }
    })
  },
  //页面显示出来时
  onShow() {
    console.log('onShow')
  },
  //页面（初次）渲染完成时
  onReady() {
    console.log('onReady')
  },
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnload')
  },

  // 4.监听其他事件
  // 监听页面滚动
  onPageScroll(obj) {
    // console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部')
  },
  // 下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新事件')
  }

})