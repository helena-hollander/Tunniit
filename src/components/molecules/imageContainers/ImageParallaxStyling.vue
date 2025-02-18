<script setup>
import { ref } from 'vue'
import Image from '@/components/atoms/Image.vue';
import ImageContainer from '@/components/molecules/imageContainers/ImageContainer.vue';
</script>

<template>
<div class="overflow">
  <div class="parallax relative">
  <Image imagePath="src/assets/images/mirror.jpg" class="bottomimage absolute object-cover h-full w-full"/>
  <Image imagePath="src/assets/images/smoke1.png" class="smokeimage absolute object-cover"/>
  <Image imagePath="src/assets/images/smoke2.png" class="smoke2image absolute object-cover"/>
  <Image imagePath="src/assets/images/smoke3.png" class="smoke3image absolute object-cover"/>



  </div>
</div>
</template>

<style scoped>
.overflow {
  overflow: hidden;
}

.parallax {
  height: 800px;
  margin: 0;
  overflow-y: auto;
  transform-style: preserve-3d;
  perspective: 1px; /* Increase the perspective value */
  overflow-x: hidden ;
  overflow-y: scroll;
}

.bottomimage {

 /* transform: translateZ(-200px) scale(calc(1 + 200 / 1000)) ; /* Decrease the translateZ value and tha translateY makes sure it stays in place on the y-axis, when the viewport gets more narrow*/
}


.smokeimage {
  transform: translateZ(0.25px) scale(calc(1 - 0.25 / 1)); 
  top: calc(400px - 50vh)*-1; /*keeping the image at the top of the viewport*/
}
.smoke2image {
  transform: translateZ(0.2px) scale(calc(1 - 0.2 / 1));
}
.smoke3image {
  transform: translateZ(0.25px) scale(calc(1 - 0.25 / 1));
}

/*translateY(calc(200px / 1000 * 100%))*/
/*Observation: I cant have it like this, if both width and height is responsive. I need to choose. Othervise, the image will move. Or I can use object-cover, to make a div with the right size, responsive, and then let the image move freely in that. So i need a fixed size with a media qeuery, or make this with Javascript, to change the scroll speed instead. */
</style>