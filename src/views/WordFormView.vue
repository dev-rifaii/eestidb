<script setup>

import {ref} from "vue";
import {insertVocabulary} from "@/client/vocabulary.js";
import router from "@/router/index.js";

const props = defineProps({
  en: {type: String, required: false},
  nominative: {type: String, required: false},
  genitive: {type: String, required: false},
  partitive: {type: String, required: false}
})

const word = ref({
  en: props.en,
  nominative: props.nominative,
  genitive: props.genitive,
  partitive: props.partitive,
});

const submitWordForm = async () => {
  insertVocabulary(word.value)
      .then(_ => router.push("/"));
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