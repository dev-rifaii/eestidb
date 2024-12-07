<script setup>

import {ref} from "vue";
import supabase from "@/client/supabase.js";
import router from "@/router/index.js";

const credentials = ref({})

const submit = async function () {
  if (!credentials.value.email || !credentials.value.password)
    console.log("ERR");
  else {
    const {data, error} = await supabase.auth.signInWithPassword({
      email: credentials.value.email,
      password: credentials.value.password,
    })
    if (data.session && data.user) {
      localStorage.setItem("session", JSON.stringify(data.session))
      localStorage.setItem("uid", JSON.stringify(data.user.id))
      await router.push("/")
    } else {
      console.log(error.message)
    }
  }
}

const submitKeyPress = function (event) {
  if (event.keyCode === 13)
    document.getElementById('submit-login-btn').click();
}

</script>

<template>
  <div class="auth-page" @keyup="submitKeyPress">
    <div class="auth-input-wrapper">
      <input v-model="credentials.email" placeholder="email" type="text">
      <input v-model="credentials.password" placeholder="password" type="password">
      <button id="submit-login-btn" class="button-1" @keyup="submitKeyPress" @click="submit">Submit</button>
    </div>
  </div>

</template>

<style scoped>

.auth-page {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}


</style>