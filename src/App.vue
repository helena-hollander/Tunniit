<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AboutView from './views/AboutView.vue'

</script>

<template>
  <header>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterView />
  </header>

 
</template>

