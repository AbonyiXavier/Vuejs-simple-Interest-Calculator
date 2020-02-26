new Vue({
  el: "#vue-app",
  data: {
    principal: 0,
    rate: 0,
    time: 0,
    // simpleInterest: 0,
    // payBackAmount: 0,
    ended: false
  },
  methods: {
    simpleInterest: function() {
      const result = Math.round(this.principal * this.rate * this.time) / 100;
      return result;
    },

    // This code below uses a click event to calculate the figures
    // calculate(e) {
    //   e.preventDefault();
    //   this.simpleInterest =
    //     Math.round(this.principal * this.rate * this.time) / 100;
    //   //   console.log(this.simpleInterest);

    //   this.payBackAmount =
    //     parseFloat(this.principal) + parseFloat(this.simpleInterest);
    // },
    reset() {
      this.principal = 0;
      this.rate = 0;
      this.time = 0;
      // this.simpleInterest = 0;
      // this.payBackAmount = 0;
      this.ended = false;
    }
  }
});
