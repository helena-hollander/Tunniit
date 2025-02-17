<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ChapterView from './views/ChapterView.vue'

</script>

<template>
  <header>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/chapter">Tunniit</RouterLink>
  <RouterView />
  </header>

 
</template>

