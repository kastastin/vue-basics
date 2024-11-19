const app = Vue.createApp({
  data: () => ({
    boxStates: {
      A: false,
      B: false,
      C: false,
    },
  }),
  methods: {
    toggleBoxSelection(box) {
      this.boxStates[box] = !this.boxStates[box];
    },
  },
  computed: {
    boxBClasses() {
      return {active: this.boxStates.B};
    },
  },
});

app.mount('#styling');
