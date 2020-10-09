//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    title: ['Han', 'Son', 'Hanson']
  },
  handleClick() {
    console.log('点击了按钮')
  },
  handleTouchStart() {
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handleTouchMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  handleTap() {
    console.log('handleTap')
  },
  handleLongpress() {
    console.log('handleLongpress')
  },
  handleEventClick(event) {
    console.log('---', event)
  },
  handleEventEnd(event) {
    console.log('+++', event)
  },
  handleFor(event) {
    // console.log(event);
    var res = event.currentTarget.dataset;
    console.log(res.item)
  },
  // 事件冒泡和事件捕获
  handleCaptureView1() {
    console.log('handleCaptureView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleBindView3() {
    console.log('handleBindView3')
  },
})
