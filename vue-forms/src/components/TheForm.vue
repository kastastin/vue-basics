<script setup>
  import { ref, useTemplateRef } from 'vue';
  import RatingControl from '@/components/RatingControl.vue';

  const userName = ref('');
  const userAge = ref(null);
  const userAgeRef = useTemplateRef('userAgeInput');
  const referrer = ref('google');
  const interest = ref([]);
  const how = ref(null);
  const confirm = ref(false);
  const rating = ref('');

  const userNameValidity = ref('pending');

  const submitForm = () => {
    console.log(userName.value);
    console.log(typeof userAge.value);
    console.log(typeof userAgeRef.value.value);
    console.log(referrer.value);
    console.log('Checkboxes: ' + interest.value);
    console.log('Radio Buttons: ' + how.value);
    console.log('Confirm terms: ' + confirm.value);
    console.log('Rating: ' + rating.value);

    userName.value = '';
    userAge.value = null;
    referrer.value = 'google';
    interest.value = [];
    how.value = null;
    confirm.value = false;
    rating.value = '';
  };

  const validateInput = () => {
    if (!userName.value) {
      userNameValidity.value = 'invalid';
    } else {
      userNameValidity.value = 'valid';
    }
  };
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="form-group" :class="{invalid: userNameValidity === 'invalid'}">
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
        @input="validateInput"
        @blur="validateInput"
      />
      <p v-if="userNameValidity === 'invalid'">Please enter a valid name!</p>
    </div>
    <div class="form-group">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model="userAge" ref="userAgeInput" />
    </div>
    <div class="form-group">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-group">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" value="news" type="checkbox" v-model="interest" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" value="tutorials" type="checkbox" v-model="interest" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" value="nothing" type="checkbox" v-model="interest" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-group">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" value="video" type="radio" v-model="how" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" value="blogs" type="radio" v-model="how" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" value="other" type="radio" v-model="how" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-group">
      <RatingControl v-model="rating" />
    </div>
    <div class="form-group">
      <input id="confirm-terms" name="confirm-terms" type="checkbox" v-model="confirm">
      <label for="confirm-terms">Agree to terms of use?</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<style scoped>
  form {
    max-width: 40rem;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    background-color: white;
  }

  .form-group {
    margin: 0.5rem 0;
  }

  .form-group.invalid input {
    border-color: red;
  }

  .form-group.invalid label,
  .form-group.invalid p {
    color: red;
  }

  label {
    font-weight: bold;
  }

  h2 {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  input,
  select {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    font: inherit;
  }

  select {
    width: auto;
  }

  input[type='checkbox'],
  input[type='radio'] {
    display: inline-block;
    width: auto;
    margin-right: 1rem;
  }

  input[type='checkbox'] + label,
  input[type='radio'] + label {
    font-weight: normal;
  }

  button {
    padding: 0.75rem 2rem;
    border: 1px solid #0076bb;
    border-radius: 30px;
    background-color: #0076bb;
    color: white;
    font: inherit;
    cursor: pointer;
  }

  button:hover,
  button:active {
    border-color: #002350;
    background-color: #002350;
  }
</style>
