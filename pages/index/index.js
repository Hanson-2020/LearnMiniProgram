//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    count: 0,
    isShow: true
  },
  handleIncrement(event) {
    console.log('---', event)
    this.setData({
      count: this.data.count +1
    })
  },
  handleClick(event) {
    console.log(event)
  },
  handleIncre() {
    // console.log('---')
    // 目的:修改my-sel下的count
    // selectComponent(id/class)
    // 1.获取组件对象
    const my_sel = this.selectComponent('#my_sel');
    // 2.通过setData修改组件中的数据（不合理）
    // my_sel.setData({
    //   count: my_sel.data.count +1
    // })
    // 3.通过方法对数据进行修改
    my_sel.handleIncre(10);
  },
  handleManySlot() {
    // console.log('--')
    const my_mangslot = this.selectComponent('#mangslot');
    my_mangslot.handleSlot(10);
  },
  handleClickIsShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})
