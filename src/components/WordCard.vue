<script setup>

import router from "@/router/index.js";
import {deleteVocabulary} from "@/client/vocabulary.js";

const props = defineProps({
  id: Number,
  en: String,
  nominative: String,
  genitive: String,
  partitive: String,
  editable: Boolean
})

const edit = () => {
  router.push({
    name: 'word-form',
    query: {
      id: props.id,
      en: props.en,
      nominative: props.nominative,
      genitive: props.genitive,
      partitive: props.partitive,
      edit: true
    }
  })
}

const del = async () => {
  await deleteVocabulary(props.id)
      .then(() => window.location.reload())
}

</script>

<template>
  <div class="word-card">
    <div class="word-header">
      <h1>{{ en }}</h1>
      <div class="word-edit-btns-wrapper">
        <button class="word-card-btn" v-if="editable" @click="edit">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
            <path
                d="M1.438 16.873l-1.438 7.127 7.127-1.437 16.874-16.872-5.69-5.69-16.873 16.872zm1.12 4.572l.722-3.584 2.86 2.861-3.582.723zm18.613-15.755l-13.617 13.617-2.86-2.861 13.617-13.617 2.86 2.861z"/>
          </svg>
        </button>
        <button class="word-card-btn" v-if="editable" @click="del">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">
            <path
                d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
          </svg>
        </button>
      </div>
    </div>
    <br>
    <p>{{ nominative }}</p>
    <p>{{ genitive }}</p>
    <p>{{ partitive }}</p>
  </div>

</template>

<style scoped>

h1 {
  color: #000000;
  font-size: 1.4rem;
}

.word-header {
  display: flex;
  gap: 2px;
}

.word-edit-btns-wrapper {
  display: flex;
  margin-left: auto;
  gap: 5px;
}

.word-card {
  border: 2px solid var(--border-color);
  /*max-width: 450px*/;
  word-break: break-word;
  padding: 10px;
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
}

.word-card-btn {
  white-space: nowrap;
  max-height: 30px;
}

</style>

