<script setup>
  import { inject } from 'vue';
  import BaseCard from '@/components/UI/BaseCard.vue';
  import BaseButton from '@/components/UI/BaseButton.vue';

  defineProps(['resource']);

  const removeResource = inject('removeResource');
</script>

<template>
  <li>
    <BaseCard>
      <header>
        <h3>{{ resource.title }}</h3>
        <BaseButton mode="flat" @click="removeResource(resource.id)">Delete</BaseButton>
      </header>
      <p>{{ resource.description }}</p>
      <nav>
        <a :href="resource.link" target="_blank">View Resource</a>
      </nav>
    </BaseCard>
  </li>
</template>

<style scoped>
  li {
    max-width: 40rem;
    margin: auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1.25rem;
  }

  p {
    margin: 0.5rem 0;
  }

  a {
    color: #ce5c00;
    text-decoration: none;
  }

  a:hover,
  a:active {
    color: #c89300;
  }
</style>
