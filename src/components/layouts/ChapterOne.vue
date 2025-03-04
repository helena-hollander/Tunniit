<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// import useSmoothScroll from '@/composables/useSmoothScroll';
import Image from '@/components/atoms/Image.vue';
// import ImageContainer from '@/components/molecules/imageContainers/ImageContainer.vue';
import ImageParallaxJs from '../molecules/imageContainers/ImageParallaxJs.vue';
import ImageShards from '../molecules/ImageShards.vue';
import ImageDream from '../molecules/ImageDream.vue';
import ImageMother from '../molecules/ImageMother.vue';
// import ImageShardsPartTwo from '../molecules/ImageShardsPartTwo.vue';
import TextLayout from '../molecules/TextLayout.vue';
</script>

<template>
<!-- <ImageParallaxStyling></ImageParallaxStyling> -->
 <section>
 <!-- <ImageParallaxJs></ImageParallaxJs> -->
 <ImageShards></ImageShards>
 <!-- <ImageShardsPartTwo></ImageShardsPartTwo> -->
 <TextLayout></TextLayout>
 </section>
 <section2 class="relative">

<ImageDream></ImageDream>

 </section2>
 <section3 class="relative">
 <ImageMother></ImageMother>
 </section3>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

</style>