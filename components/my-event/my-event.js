// components/my-event/my-event.js
Component({
  methods: {
    handleIncrement() {
      // console.log('--')
      this.triggerEvent('increment', {name: 'Hanson'}, {})
    }
  }
})
