<script setup>
  import { ref, useTemplateRef } from 'vue';
  import ErrorAlert from '@/components/ErrorAlert.vue';

  const input = useTemplateRef('goal');
  const isInputInvalid = ref(false);

  const setGoal = () => {
    const enteredValue = input.value.value;

    if (!enteredValue) {
      isInputInvalid.value = true;
    }
  };

  const confirmError = () => {
    isInputInvalid.value = false;
  };
</script>

<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal">
  <button @click="setGoal">Set Goal</button>
  <Teleport to="body">
    <ErrorAlert v-if="isInputInvalid">
      <h2>Input is invalid!</h2>
      <p>Please enter at least a few characters.</p>
      <button @click="confirmError">Okay</button>
    </ErrorAlert>
  </Teleport>
</template>
