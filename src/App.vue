<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {computed, onBeforeMount, ref} from "vue";
import router from "@/router/index.js";
import {checkIfAuthenticated} from "@/util/auth-util.js";

const isAuthenticated = ref(false)

onBeforeMount(async () => {
  isAuthenticated.value = await checkIfAuthenticated();
})


const authLabel = computed(() => {
  return isAuthenticated.value === true ? 'Sign out' : 'Sign in';
})

const authButtonClick = () => {
  if (isAuthenticated.value === true) {
    localStorage.clear();
  } else {
    router.push('/auth')
  }
}

const isAuthPath = computed(() => {
  return router.currentRoute.value.path === '/auth'
})

</script>

<template>
  <header>
    <img class="logo-img" src="./assets/logo-transp.png" alt="logo">
    <div class="header-center">
      <RouterLink to="/">
        <button class="button-1">Vocabulary</button>
      </RouterLink>
      <RouterLink to="auth">
        <button class="button-1" @click="authButtonClick" v-if="!isAuthPath">{{ authLabel }}</button>
      </RouterLink>
    </div>
  </header>
  <div class="body">
    <RouterView/>
  </div>
  <footer><a href="https://www.github.com/dev-rifaii">github</a></footer>
</template>

<style scoped>

header, header > * {
}

header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(0, 1fr);
  gap: 10px;
  min-height: 9dvh;
  max-height: 9dvh;
  height: 9dvh;
}

header > * {
  max-height: 100%;
}

header > .header-center {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.body {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 5dvh;
}

.logo-img {
  height: 100%;
  align-self: center;
}

@media screen and (max-width: 500px) {
  header {
    grid-template-columns: 1fr;
  }

  .logo-img {
    justify-self: center;
  }
}

</style>
