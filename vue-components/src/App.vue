<script setup>
  import { ref } from 'vue';
  import TheHeader from '@/components/TheHeader.vue';
  import BadgeList from '@/components/BadgeList.vue';
  import UserInfo from '@/components/UserInfo.vue';
  import UserGoals from '@/components/UserGoals.vue';

  const activeUser = ref({
    name: 'Konstantin',
    description: 'Site owner and admin',
    role: 'admin'
  });
</script>

<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <UserGoals #default="slotProps">
      <p>{{ slotProps.item }}</p>
    </UserGoals>
  </div>
</template>
