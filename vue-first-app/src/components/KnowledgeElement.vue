<script setup>
  defineProps(['id', 'topicName', 'description']);
  defineEmits(['select-topic']);
</script>

<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="$emit('select-topic', id)">Learn More</button>
  </li>
</template>
