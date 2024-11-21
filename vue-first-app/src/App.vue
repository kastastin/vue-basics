<script setup>
  import { ref } from 'vue';
  import MyCounter from '@/components/MyCounter.vue';
  import NewFriend from '@/components/NewFriend.vue';
  import FriendContact from '@/components/FriendContact.vue';

  const friends = ref([
    {
      id: 'manuel',
      name: 'Manuel Lorenz',
      phone: '01234 5678 991',
      email: 'manuel@localhost.com'
    },
    {
      id: 'julie',
      name: 'Julie Jones',
      phone: '09876 543 221',
      email: 'julie@localhost.com'
    }
  ]);

  const addFriend = (data) => {
    friends.value.push({
      id: data.id,
      name: data.name,
      phone: data.phone,
      email: data.email
    });
    data.resetForm();
  };

  const deleteFriend = (id) => {
    friends.value = friends.value.filter(friend => friend.id !== id);
  };
</script>

<template>
  <header>
    <h1>FriendList</h1>
  </header>
  <NewFriend @form-handler="addFriend" />
  <section>
    <ul>
      <FriendContact
        :friend="friend"
        v-for="friend in friends"
        key="friend.id"
        @button-handler="deleteFriend" />
    </ul>
  </section>
  <section v-show="false">
    <MyCounter />
  </section>
</template>

<style scoped>
  header {
    width: 90%;
    max-width: 40rem;
    margin: 3rem auto;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    background-color: #58004d;
    color: white;
    text-align: center;
  }
</style>
