const app = Vue.createApp({
  data: () => ({
    friends: [
      {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com',
      },
      {
        id: 'julie',
        name: 'Julie Jones',
        phone: '09876 543 221',
        email: 'julie@localhost.com',
      },
    ],
  }),
});

app.component('friend-contact', {
  props: ['friend'],
  data: () => ({
    detailsAreVisible: false,
  }),
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide Details' : 'Show Details' }}</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
});

app.mount('#app');