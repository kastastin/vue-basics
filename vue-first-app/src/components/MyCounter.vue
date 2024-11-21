<script setup>
  import { ref } from 'vue';
  import CounterButton from '@/components/CounterButton.vue';

  const counter = ref(0);
</script>

<template>
  <h2>Counter: {{ counter }}</h2>
  <CounterButton @increase-by="(n) => counter += n" />
</template>
