<template>
  <dialog open>
    <slot />
  </dialog>
</template>

<style scoped>
  dialog {
    position: fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    margin: 0;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    background-color: white;
  }
</style>
