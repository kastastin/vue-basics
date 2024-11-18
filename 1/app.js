const App = {
  data: () => ({
    items: [1, 2, 3, 4, 5],
  }),
  methods: {
    remove(i) {
      this.items.splice(i, 1);
    },
    log(item) {
      console.log(`Item: ${item} was deleted`);
    },
  },
};

Vue.createApp(App).mount("#app");