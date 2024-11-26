<script setup>
  import { inject } from 'vue';
  import LearningResource from '@/components/learning-resources/LearningResource.vue';

  defineProps(['data']);
  const data = inject('storedResources');
</script>

<template>
  <ul>
    <LearningResource v-for="item in data" :key="item.id" :resource="item" />
  </ul>
</template>

<style scoped>
  ul {
    max-width: 40rem;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }
</style>
