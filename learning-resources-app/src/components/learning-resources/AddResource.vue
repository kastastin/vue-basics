<script setup>
  import { ref, useTemplateRef, inject } from 'vue';
  import BaseCard from '@/components/UI/BaseCard.vue';
  import BaseButton from '@/components/UI/BaseButton.vue';
  import BaseDialog from '@/components/UI/BaseDialog.vue';

  const addResource = inject('addResource');
  const form = useTemplateRef('form');
  const formInvalidInput = ref(null);

  const submitForm = () => {
    const formData = new FormData(form.value);

    // Check IF all inputs are filled
    for (const [key, value] of formData.entries()) {
      if (!value.trim()) {
        formInvalidInput.value = key;
        return;
      }
    }

    // IF valid - create new resource
    const inputValues = Object.fromEntries(formData.entries());
    const newResource = {
      ...inputValues,
      id: new Date().toISOString()
    };

    addResource(newResource);

    // Reset form inputs after submission
    form.value.reset();
  };

  const confirmError = () => {
    formInvalidInput.value = null;
  };
</script>

<template>
  <BaseCard>
    <form @submit.prevent="submitForm" ref="form">
      <div class="form-group">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" />
      </div>
      <div class="form-group">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" />
      </div>
      <div>
        <BaseButton type="submit">Add Resource</BaseButton>
      </div>
    </form>
  </BaseCard>
  <BaseDialog v-if="formInvalidInput" title="Invalid input" @close-dialog="confirmError">
    <template #default>
      <p>The <strong>{{ formInvalidInput }}</strong> input is empty!</p>
      <p>Make sure you enter at least a few characters into {{ formInvalidInput }} field.</p>
    </template>
    <template #actions>
      <BaseButton @click="confirmError">Okay</BaseButton>
    </template>
  </BaseDialog>
</template>

<style scoped>
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    padding: 0.15rem;
    border: 1px solid #ccc;
    font: inherit;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
  }

  .form-group {
    margin: 1rem 0;
  }
</style>
