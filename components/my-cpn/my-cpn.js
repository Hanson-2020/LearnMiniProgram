// components/my-cpn/my-cpn.js
Component({
  data: {
    title: 'Hanson'
  },
  // 希望css相互影响
  options: {
    // shared:分享
    styleIsolation: 'shared'
  }
})