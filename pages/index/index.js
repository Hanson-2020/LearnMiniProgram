
import request from '../../service/network';
Page({
  onLoad: function() {
    // 1.原生的方式发送网络请求
    this.get_data_origin();
    // 2.进行封装的网络请求
    request({
      url: 'http://152.136.185.210:8000/api/w6/recommend'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    }) 
  },
  get_data_origin() {
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/home/data',
      // methos并且携带参数
      methods: 'post',
      // data携带参数
      data: {
        type: 'sell',
        page: 1
      },
      success:function(res) {
        // console.log(res)
      }
    })
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   data: {
    //     name: 'Hanson',
    //     age: 18
    //   },
    //   method: 'post',
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   fail: function(err) {
    //     console.log(err)
    //   }
    // })
  }
})
