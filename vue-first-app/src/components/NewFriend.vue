<script setup>
  import { ref } from 'vue';

  const name = ref('');
  const phone = ref('');
  const email = ref('');
</script>

<template>
  <form class="card" @submit.prevent="(e) => {
    $emit('formHandler', {
      id: Date.now().toString(),
      name: name,
      phone: phone,
      email: email,
      resetForm: () => e.target.reset()
    })
  }">
    <input type="text" placeholder="Name" v-model="name">
    <input type="tel" placeholder="Phone" v-model="phone">
    <input type="email" placeholder="Email" v-model="email">
    <button type="submit">Add</button>
  </form>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }

  button {
    width: 50%;
    padding: 1rem;
  }
</style>
