const data = {
  title: 'Vue 3',
  message: 'Welcome to Vue 3',
};

const proxy = new Proxy(data, {
  // get(target, key) {
  //   console.log(target);
  //   console.log(key);
  // },
  set(target, key, value) {
    if (key === 'title') {
      target.message = 'Welcome to ' + value;
    }
    target[key] = value;
  },
});

// proxy.message
proxy.title = "Angular";
console.log(proxy);