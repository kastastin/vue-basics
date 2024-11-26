<script setup>
  defineProps(['modelValue']);
  const emit = defineEmits(['update:modelValue']);

  const setActiveOption = (option) => {
    emit('update:modelValue', option);
  };
</script>

<template>
  <ul>
    <li>
      <button
        :class="{active: modelValue === 'poor'}"
        type="button"
        @click="setActiveOption('poor')"
      >
        Poor
      </button>
    </li>
    <li>
      <button
        :class="{active: modelValue === 'average'}"
        type="button"
        @click="setActiveOption('average')"
      >
        Average
      </button>
    </li>
    <li>
      <button
        :class="{active: modelValue === 'great'}"
        type="button"
        @click="setActiveOption('great')"
      >
        Great
      </button>
    </li>
  </ul>
</template>

<style scoped>
  button.active {
    border-color: red;
    color: red;
  }

  ul {
    display: flex;
    margin: 0.5rem 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
  }

  button {
    border: none;
    background-color: transparent;
    font: inherit;
    cursor: pointer;
  }
</style>
