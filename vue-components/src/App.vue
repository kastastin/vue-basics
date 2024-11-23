<script setup>
  import { ref } from 'vue';
  import TheHeader from '@/components/TheHeader.vue';
  import ActiveGoals from '@/components/ActiveGoals.vue';
  import ManageGoals from '@/components/ManageGoals.vue';


  const componentMap = {
    'active-goals': ActiveGoals,
    'manage-goals': ManageGoals
  };
  const selectedComponent = ref('active-goals');

  const setSelectedComponent = (component) => {
    selectedComponent.value = component;
  };
</script>

<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!--<ActiveGoals v-if="selectedComponent === 'active-goals'" />-->
    <!--<ManageGoals v-if="selectedComponent === 'manage-goals'" />-->
    <KeepAlive>
      <component :is="componentMap[selectedComponent]" />
    </KeepAlive>
  </div>
</template>
