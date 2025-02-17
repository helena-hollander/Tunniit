<script setup>
import { ref } from 'vue'
import Image from '@/components/atoms/Image.vue';
import ImageContainer from '@/components/molecules/imageContainers/ImageContainer.vue';
</script>

<template>
  <div class="parallax">
  <Image imagePath="src/assets/images/mirror.jpg" class="bottomimage absolute"/>
  <!-- <Image imagePath="src/assets/images/mirror.jpg" class="topimage w-[40vw] absolute"/> -->
  <Image imagePath="src/assets/images/smoke1.png" class="smokeimage absolute w-full"/>
  <Image imagePath="src/assets/images/smoke2.png" class="smoke2image absolute w-full"/>
  <Image imagePath="src/assets/images/smoke3.png" class="smoke3image absolute w-full"/>



  </div>
</template>

<style scoped>
.parallax {
  height: 100vh;
  overflow-y: auto;
  transform-style: preserve-3d;
  perspective: 1000px; /* Increase the perspective value */
}

.bottomimage {
  transform: translateZ(-200px) scale(calc(1 + 200 / 1000)); /* Decrease the translateZ value */
}

.topimage {
  transform: translateZ(200px) scale(calc(1 - 200 / 1000)); /* Increase the translateZ value to increase parallax effect - remember the perspective as well. Scale  needs to calc(1-translateZ px / perspective)), to counterbalance the image size, that would otherwise chane, when translated back and forth*/
} 
.smokeimage {
  transform: translateZ(100px) scale(calc(1 - 100 / 1000));
}
.smoke2image {
  transform: translateZ(150px) scale(calc(1 - 150 / 1000));
}
.smoke3image {
  transform: translateZ(100px) scale(calc(1 - 100 / 1000));
}
</style>