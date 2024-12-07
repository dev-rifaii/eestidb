<script setup>

defineProps({
  en: String,
  nominative: String,
  genitive: String,
  partitive: String,
})

</script>

<template>
  <div class="word-card">
    <h1>{{ en }}</h1>
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

.word-card {
  border: 2px solid var(--border-color);
  max-width: 450px;
  padding: 10px;
  background-color: var(--second-bg-color);
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
}

</style>

