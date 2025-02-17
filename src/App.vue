<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ChapterView from './views/ChapterView.vue'

</script>

<template>
  <header class="fixed">
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/chapter">Tunniit</RouterLink>

  </header>
  <body>
  
  <RouterView></RouterView>
  </body>
 
</template>

