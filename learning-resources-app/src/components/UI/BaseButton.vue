<script setup>
  defineProps(['mode']);
</script>

<template>
  <button :class="mode">
    <slot />
  </button>
</template>

<style scoped>
  button {
    padding: 0.75rem 1.5rem;
    border: 1px solid #3a0061;
    background-color: #3a0061;
    color: white;
    font-family: inherit;
    cursor: pointer;
  }

  button:hover,
  button:active {
    border-color: #270041;
    background-color: #270041;
  }

  .flat {
    border: none;
    background-color: transparent;
    color: #3a0061;
  }

  .flat:hover,
  .flat:active {
    background-color: #edd2ff;
  }
</style>
