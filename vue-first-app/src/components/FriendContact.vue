<script setup>
  import { ref } from 'vue';

  defineProps(['friend']);

  const detailsAreVisible = ref(false);

  const toggleDetails = () => {
    detailsAreVisible.value = !detailsAreVisible.value;
  };
</script>

<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide Details' : 'Show Details' }}</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<style scoped>
  li {
    width: 90%;
    max-width: 40rem;
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    text-align: center;
  }

  h2 {
    margin: 0 0 1rem 0;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    font-size: 2rem;
  }
</style>
