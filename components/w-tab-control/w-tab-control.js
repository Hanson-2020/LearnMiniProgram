// components/w-tab-control/w-tab-control.js
Component({
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0,
    title: [1,2,3,4,5,6]
  },
  methods: {
    handleClick(event) {
      console.log(event)
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('itemClick', {index, title: this.properties.titles}, {})
    }
  }
})
