<script setup>
  defineProps(['title']);
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #640032;
  }

  header h1 {
    margin: 0;
    color: white;
  }
</style>
