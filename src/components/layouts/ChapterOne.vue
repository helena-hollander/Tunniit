<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Image from '@/components/atoms/Image.vue';
// import ImageContainer from '@/components/molecules/imageContainers/ImageContainer.vue';
// import ImageParallaxStyling from '../molecules/imageContainers/ImageParallaxStyling.vue';
import ImageParallaxJs from '../molecules/imageContainers/ImageParallaxJs.vue';
import ImageShards from '../molecules/ImageShards.vue';
import ImageDream from '../molecules/ImageDream.vue';
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
</template>
