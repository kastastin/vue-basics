const App = {
  data: () => ({
    items: [1, 2, 3, 4, 5],
  }),
  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = "";
    },
  },
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2 === 0);
    },
  },
};

Vue.createApp(App).mount("#app");
