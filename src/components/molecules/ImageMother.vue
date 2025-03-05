<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Image from '@/components/atoms/Image.vue';
</script>

<template>
  <div class="h-[800vh] relative"> 
    <Image src="src/assets/images/del3Sketch/mother0201.png" :initialY="'-84'" :rate="0.005" :initialX="'0'" :rateX="0" class="z-10"></Image>
     <Image src="src/assets/images/del3Sketch/scream0201.png" :initialY="'-38'" :rate="0.0018" :initialX="'-0.5'" :rateX="0" class="z-10"></Image>
     <Image src="src/assets/images/del3Sketch/motherHair0202.png" :initialY="'197'" :rate="0.0032" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/del3Sketch/motherHair0201.png" :initialY="'326'" :rate="-0.0045" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/del3Sketch/mother0202.png" :initialY="'150'" :rate="0.0032" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/del3Sketch/silhuet0201.png" :initialY="'352'" :rate="-0.0045" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/del3Sketch/cutHand0201.png" :initialY="'626'" :rate="-0.018" :initialX="'0'" :rateX="0"></Image>

   
  </div>
</template>