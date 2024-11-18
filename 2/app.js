const app = Vue.createApp({
  data: () => ({
    goalA: "Learn Vue",
    goalB: "Master Vue and build amazing apps",
    vueLink: "https://vuejs.org/",
  }),
  methods: {
    outputGoal() {
      return Math.random() < 0.5 ? this.goalA : this.goalB;
    },
  },
});

app.mount("#user-goal");