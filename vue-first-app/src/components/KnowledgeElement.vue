<script setup>
  import { inject } from 'vue';

  defineProps(['id', 'topicName', 'description']);

  const selectTopic = inject('selectTopic');
</script>

<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>
