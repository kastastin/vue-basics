const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      inputValue: "☝️ Type something and press 'Enter' to see an output",
      firstname: "",
      lastname: "",
    };
  },
  methods: {
    incrementCounter(amount = 1) {
      this.counter += amount;
      console.log('------');
    },
    decrementCounter(amount = 1) {
      this.counter -= amount;
    },
    setInputValue(e) {
      this.inputValue = e.target.value;
      this.resetInput();
    },
    resetInput() {
      this.$refs.input.value = "";
      this.$refs.input.focus();
    },
    submitForm() {
      alert('Submitted!');
    },
  },
  watch: {
    counter(newValue) {
      this.$refs.input.value = newValue;
    },
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname;
    },
  },
});

app.mount('#events');
