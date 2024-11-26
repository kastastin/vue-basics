<script setup>
  import { onMounted, onBeforeUnmount } from 'vue';
  import BaseButton from '@/components/UI/BaseButton.vue';

  defineProps(['title']);
  const emit = defineEmits(['closeDialog']);

  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      emit('closeDialog');
    }
  };

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
</script>

<template>
  <Teleport to="body">
    <div @click="$emit('closeDialog')" />
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot />
      </section>
      <menu>
        <slot name="actions">
          <BaseButton @click="$emit('closeDialog')">Close</BaseButton>
        </slot>
      </menu>
    </dialog>
  </Teleport>
</template>

<style scoped>
  div {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  dialog {
    overflow: hidden;
    position: fixed;
    top: 20vh;
    left: 10%;
    width: 80%;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    z-index: 100;
  }

  header {
    width: 100%;
    padding: 1rem;
    background-color: #3a0061;
    color: white;
  }

  header h2 {
    margin: 0;
  }

  section {
    padding: 1rem;
  }

  menu {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    dialog {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
</style>
