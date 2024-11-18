const h = Vue.h;

const app = Vue.createApp({
  data: () => ({
    title: "From render",
  }),
  render() {
    return h('div', {
      class: 'card center',
    }, [
      h('h1', {}, this.title),
      h('button', {
        class: 'btn',
        onClick: () => this.title = 'Changed title',
      }, 'Change'),
    ]);
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
});

app.mount('#app');

// setTimeout(() => {
//   app.unmount();
// }, 2000);

Vue.createApp({
  data: () => ({title: 'Second app title'})
}).mount('#app2');