<script setup>
  import { ref } from 'vue';

  defineProps(['friend']);

  const detailsAreVisible = ref(false);

  const toggleDetails = () => {
    detailsAreVisible.value = !detailsAreVisible.value;
  };
</script>

<template>
  <li class="card">
    <h2>{{ friend.name }}</h2>
    <button class="btn-delete" @click="$emit('buttonHandler', friend.id)">Delete</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide Details' : 'Show Details' }}</button>
    <ul v-if="detailsAreVisible">
      <li class="card"><strong>Phone:</strong> {{ friend.phone }}</li>
      <li class="card"><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<style scoped>
  h2 {
    margin: 0 0 1rem 0;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    font-size: 2rem;
  }

  .btn-delete {
    position: absolute;
    top: 0;
    right: 0;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
  }
</style>
