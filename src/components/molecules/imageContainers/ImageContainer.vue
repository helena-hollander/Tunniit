<script setup>
import Image from '@/components/atoms/Image.vue';
defineProps(['imagePath']);

</script>

<template>
  <div>
  <Image v-for="(path, index) in imagePath" :key="index" :src="path" />
  </div>
</template>