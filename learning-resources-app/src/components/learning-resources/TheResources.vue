<script setup>
  import { ref, provide, computed } from 'vue';
  import BaseCard from '@/components/UI/BaseCard.vue';
  import BaseButton from '@/components/UI/BaseButton.vue';
  import AddResource from '@/components/learning-resources/AddResource.vue';
  import StoredResources from '@/components/learning-resources/StoredResources.vue';

  const resourcesMap = {
    'stored-resources': StoredResources,
    'add-resource': AddResource
  };

  const selectedTab = ref('stored-resources');
  const storedResources = ref([
    {
      id: 'official-guide',
      title: 'Official Guide',
      description: 'The official Vue.js documentation.',
      link: 'https://vuejs.org'
    },
    {
      id: 'google',
      title: 'Google',
      description: 'Search anything.',
      link: 'https://www.google.com/'
    }
  ]);

  provide('storedResources', storedResources);
  provide('addResource', (data) => {
    storedResources.value.unshift(data);
    selectedTab.value = 'stored-resources';
  });
  provide('removeResource', (id) => {
    const resourceIndex = storedResources.value.findIndex(r => r.id === id);
    storedResources.value.splice(resourceIndex, 1);
  });

  const setSelectedTab = (tab) => {
    selectedTab.value = tab;
  };

  const storedBtnMode = computed(() => ({
    'flat': selectedTab.value !== 'stored-resources'
  }));
  const addBtnMode = computed(() => ({
    'flat': selectedTab.value !== 'add-resource'
  }));
</script>

<template>
  <BaseCard>
    <BaseButton
      @click="setSelectedTab('stored-resources')"
      :mode="storedBtnMode"
    >
      Stored Resources
    </BaseButton>
    <BaseButton
      @click="setSelectedTab('add-resource')"
      :mode="addBtnMode"
    >
      Add Resource
    </BaseButton>
  </BaseCard>
  <KeepAlive>
    <component :is="resourcesMap[selectedTab]" />
  </KeepAlive>
</template>
