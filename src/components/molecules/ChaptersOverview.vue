<template>
  <AButton @click="prevChapter">Previous</AButton>
  <AButton @click="nextChapter">Next</AButton>
  <AButton @click="resetChapters">Reset</AButton>
</template>
<script setup>

import { useChapters } from '../../composables/useChapters';
import AButton from '@/components/atoms/AButton.vue';
const { prevChapter, nextChapter, activeChapter, chapters } = useChapters();

const resetChapters = () => {
  activeChapter.value = chapters[0];
}
</script>