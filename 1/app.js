const h = Vue.h;

const app = Vue.createApp({
  data: () => ({
    title: "From template/render",
  }),
  methods: {
    changeTitle(text) {
      this.title = text;
      console.log(this);
    },
  },
  // template: `
  //   <div class="card center">
  //     <h1>{{title}}</h1>
  //     <button class="btn" @click="title='Changed title'">Change</button>
  //   </div>
  // `,
  render() {
    return h('div', {
      class: 'card center',
    }, [
      h('h1', {}, this.title),
      h('button', {
        class: 'btn',
        // onClick: () => this.title = 'Changed title',
        onClick: () => this.changeTitle('Changed title'),
      }, 'Change'),
    ]);
  },
});

app.mount('#app');