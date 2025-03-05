<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Image from '@/components/atoms/Image.vue';
</script>

<template>
  <div class="h-[810vh] relative"> 
    <Image src="/images/del3Sketch/bg03.png" :initialY="'-380'" :rate="0.03" :initialX="'0'" :rateX="0"></Image>
    <Image src="/images/del3Sketch/mother0201.png" :initialY="'-84'" :rate="0.005" :initialX="'0'" :rateX="0" class="z-10"></Image>
     <Image src="/images/del3Sketch/scream0201.png" :initialY="'-38'" :rate="0.0018" :initialX="'-0.5'" :rateX="0" class="z-10"></Image>
     <Image src="/images/del3Sketch/motherHair0202.png" :initialY="'197'" :rate="0.0032" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/del3Sketch/motherHair0201.png" :initialY="'322'" :rate="-0.0045" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/del3Sketch/mother0202.png" :initialY="'150'" :rate="0.0032" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/del3Sketch/silhuet0201.png" :initialY="'352'" :rate="-0.0045" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/del3Sketch/cutHand0201.png" :initialY="'626'" :rate="-0.018" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/del3Sketch/reaching0201.png" :initialY="'346'" :rate="0" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/del3Sketch/mother0203.png" :initialY="'206'" :rate="0.008" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/del3Sketch/swimming0201.png" :initialY="'406'" :rate="0.001" :initialX="'-88'" :rateX="0.0045"></Image>

   
  </div>
</template>