<script setup>
  import { ref } from 'vue';

  const goals = ref(['Learn vue', 'Read a book']);
</script>

<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" />
    </li>
  </ul>
</template>
