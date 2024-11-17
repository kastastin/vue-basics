const App = {
  data: () => ({
    person: {
      firsName: 'Bob',
      lastName: 'Builder',
      age: 20,
    },
    colors: ['yellow', 'blue', 'white'],
  })
}

Vue.createApp(App).mount("#app");
