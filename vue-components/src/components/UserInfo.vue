<script setup>
  import BaseBadge from '@/components/BaseBadge.vue';
  import BaseCard from '@/components/BaseCard.vue';

  defineProps(['fullName', 'infoText', 'role']);
</script>

<template>
  <BaseCard>
    <template #header>
      <h3>{{ fullName }}</h3>
      <BaseBadge :type="role" :caption="role.toUpperCase()" />
    </template>
    <template #default>
      <p>{{ infoText }}</p>
    </template>
  </BaseCard>
</template>
