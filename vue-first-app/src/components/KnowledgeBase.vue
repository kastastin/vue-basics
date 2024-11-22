<script setup>
  import KnowledgeGrid from '@/components/KnowledgeGrid.vue';

  defineEmits(['select-topic']);
</script>

<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowledgeGrid @select-topic="$emit('select-topic', $event)" />
  </section>
</template>
