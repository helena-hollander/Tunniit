<template>
  <div class="chapter">
    <h1>'Tunniit''</h1>
    <component :is="components[activeChapter]">hej</component>
    <p>{{ activeChapter }}</p>
    <ChaptersOverview />
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useChapters } from '@/composables/useChapters'; 
import ChaptersOverview from '@/components/molecules/ChaptersOverview.vue';
import AButton from '@/components/atoms/AButton.vue';

const components = [
  AButton,
  AButton,
  AButton,

]

const { activeChapter } = useChapters(); 
</script>