<script setup>

import WordCard from "@/components/WordCard.vue";
import {computed, onMounted} from "vue";
import {ref} from "vue";
import {fetchVocabulary} from "@/client/vocabulary.js";

const search = ref('');
const words = ref([]);
const editable = ref(false);

onMounted(async () => {
  words.value = await fetchVocabulary();
})

const filterWords = computed(() => {
  if (search.value === '') return words.value;
  return words.value.filter(
      word =>
          word.en.toLowerCase().includes(search.value.toLowerCase())
          || word.nominative.toLowerCase().includes(search.value.toLowerCase())
          || word.genitive.toLowerCase().includes(search.value.toLowerCase())
          || word.partitive.toLowerCase().includes(search.value.toLowerCase())
  );
})

const vocabNotEmpty = computed(() => {
  return words.value.length > 0;
})

</script>

<template>
  <div class="vocab-page">
    <div class="vocab-header">
      <RouterLink to="/word">
        <button class="button-1">Insert</button>
      </RouterLink>
      <input class="vocab-search" v-if="vocabNotEmpty" type="text" v-model="search" placeholder="Search">
      <button class="button-1" @click="editable = !editable">Edit</button>
    </div>
    <div class="vocab-grid">
      <WordCard v-for="word in filterWords" :key="word.id"
                :id="word.id"
                :en="word.en"
                :nominative="word.nominative"
                :genitive="word.genitive"
                :partitive="word.partitive"
                :editable="editable"
      />
    </div>
  </div>

</template>

<style scoped>

.vocab-page {
  margin-top: 2vh;
}

.vocab-header {
  margin: 0 25px 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.vocab-search {
  min-width: 140px;
}

.vocab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 2rem 1rem 2rem;
  min-width: fit-content;
}

</style>