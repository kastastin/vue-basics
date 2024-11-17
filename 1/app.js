const App = {
  data() {
    return {
      title: "Notes list",
      placeholderText: "Enter note here",
      inputValue: ""
    }
  },
  methods: {
    inputChangeHandler(e) {
      this.inputValue = e.target.value;
    }
  }
}

Vue.createApp(App).mount("#app")

