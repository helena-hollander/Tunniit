<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// import useSmoothScroll from '@/composables/useSmoothScroll';
import Image from '@/components/atoms/Image.vue';
import Header from '@/components/molecules/Header.vue';
// import ImageContainer from '@/components/molecules/imageContainers/ImageContainer.vue';
import ImageParallaxJs from '../molecules/imageContainers/ImageParallaxJs.vue';
import ImageShards from '../molecules/ImageShards.vue';
import ImageDream from '../molecules/ImageDream.vue';
import ImageMother from '../molecules/ImageMother.vue';
// import ImageShardsPartTwo from '../molecules/ImageShardsPartTwo.vue';
import TextLayout from '../molecules/TextLayout.vue';
import ImageCrack from '../molecules/ImageCrackSection.vue';
import ImageEnding from '../molecules/ImageEnding.vue';
</script>

<template>
  <Header class=""></Header>
  <div class="h-[100px] bg-sky-900"></div>
<!-- <ImageParallaxStyling></ImageParallaxStyling> -->
 <section class="relative">
 <!-- <ImageParallaxJs></ImageParallaxJs> -->
 <ImageShards></ImageShards>
 <!-- <ImageShardsPartTwo></ImageShardsPartTwo> -->
 <TextLayout></TextLayout>
 </section>
 <section class="relative">

<ImageDream></ImageDream>

 </section>
 <section class="relative">
   <ImageMother></ImageMother>
  </section>
  <section class="relative">
    <ImageCrack/>
    <ImageEnding></ImageEnding>
  </section>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

</style>