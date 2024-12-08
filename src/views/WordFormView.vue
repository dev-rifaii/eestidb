<script setup>

import {ref} from "vue";
import {insertVocabulary, updateVocabulary} from "@/client/vocabulary.js";
import router from "@/router/index.js";
import {useRoute} from "vue-router";

const route = useRoute()

const word = ref({
  id: route.query.id,
  en: route.query.en,
  nominative: route.query.nominative,
  genitive: route.query.genitive,
  partitive: route.query.partitive,
});

const isEdit = ref(route.query.edit)

const submitWordForm = async () => {
  if (!isEdit.value) {
    insertVocabulary(word.value)
        .then(_ => router.push("/"));
    return Promise.resolve();
  }

  await updateVocabulary(word.value)
}

</script>

<template>
  <div class="word-form-wrapper">
    <div class="word-form">
      <label>English:</label>
      <input v-model="word.en" type="text">
      <label>Nominative:</label>
      <input v-model="word.nominative" type="text">
      <label>Genitive:</label>
      <input v-model="word.genitive" type="text">
      <label>Partitive:</label>
      <input v-model="word.partitive" type="text">
      <button class="button-1" @click="submitWordForm">Submit</button>
    </div>
  </div>
</template>

<style scoped>

.word-form-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  align-items: center;
  justify-content: center;
}

.word-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>