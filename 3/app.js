Vue.createApp({
  data: () => ({
    message: 'Vue is great!',
  }),
  methods: {
    saveInput(e) {
      this.currentUserInput = e.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
      console.dir(this.$refs.userText);
    },
  },
}).mount("#app");

Vue.createApp({
  template: `
    <p>{{ meal }}</p>
  `,
  data: () => ({
    meal: 'Pizza',
  }),
}).mount("#app2");

// --- Proxy (Native JS) ---
const messages = {
  message: 'Hello',
  longMessage: 'Hello world!',
};

const proxy = new Proxy(messages, {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " world!";
    }
    target.message = value;
  },
});

proxy.message = 'Bye';
console.log(proxy.longMessage);