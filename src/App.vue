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
    <RouterLink to="/">
      <button class="button-1">Vocabulary</button>
    </RouterLink>
    <RouterLink to="auth">
      <button class="button-1" @click="authButtonClick" v-if="!isAuthPath">{{ authLabel }}</button>
    </RouterLink>
  </header>
  <div class="body">
    <RouterView/>
  </div>
  <footer><a href="https://www.github.com/dev-rifaii">github</a></footer>
</template>

<style scoped>

header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 9dvh;
}

.body {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 5dvh;
}

</style>
