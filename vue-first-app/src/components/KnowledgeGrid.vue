<script setup>
  import { inject } from 'vue';
  import KnowledgeElement from '@/components/KnowledgeElement.vue';

  const topics = inject('topics');
</script>

<template>
  <ul>
    <KnowledgeElement
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    />
  </ul>
</template>
