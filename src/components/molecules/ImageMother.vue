<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Image from '@/components/atoms/Image.vue';
</script>

<template>
  <div class="h-[500vh] relative"> 
    <Image src="src/assets/images/del3Sketch/mother0201.png" :initialY="'-84'" :rate="0.005" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/del3Sketch/scream0201.png" :initialY="'-38'" :rate="0.0018" :initialX="'-0.5'" :rateX="0"></Image>

   
  </div>
</template>