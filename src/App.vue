<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ChapterView from './views/ChapterView.vue'

</script>

<template>
  <header class="fixed">
  <RouterLink to="/" class="opacity-0">Home</RouterLink>
  <RouterLink to="/chapter" class="opacity-0">Tunniit</RouterLink>

  </header>
  
  <RouterView></RouterView>
 
</template>

