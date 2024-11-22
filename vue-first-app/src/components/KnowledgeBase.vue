<script setup>
  import KnowledgeGrid from '@/components/KnowledgeGrid.vue';

  defineProps(['topics']);
  defineEmits(['select-topic']);
</script>

<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowledgeGrid :topics="topics" @select-topic="$emit('select-topic', $event)" />
  </section>
</template>
