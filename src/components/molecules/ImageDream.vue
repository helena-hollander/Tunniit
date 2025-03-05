<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Image from '@/components/atoms/Image.vue';
</script>

<template>
  <div class="h-[1150vh] relative translate-y-[-800px]"> <!-- overflow-x-hidden og relative, sikrer, at jeg ikke får en horizontal scrollbar -->
     <Image src="/images/del2Sketch/underWater02.png" :initialY="'-96'" :initialScale="'0.8'" :scaleTo="'1'" :rate="0.03" :initialX="'0'" :rateX="0" class="z-10 origin-top"></Image>
     <Image src="/images/del2Sketch/bg0201.png" :initialY="'-12'" :rate="0.03" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/del2Sketch/bg0202.png" :initialY="'180'" :rate="0.03" :initialX="'0'" :rateX="0"></Image>
     <!-- origin-bottom gør at den vokser fra nederst midten -->
     <Image src="/images/del2Sketch/sinking0201.png" :initialY="'-38'" :rate="0.036" :initialX="'0'" :rateX="0" ></Image>
     <Image src="/images/del2Sketch/sinking0202.png" :initialY="'28'" :rate="0.032" :initialX="'0'" :rateX="0" ></Image>
     <Image src="/images/del2Sketch/hands0201.png" :initialY="'148'" :rate="0.02" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/del2Sketch/feet0201.png" :initialY="'218'" :rate="0.018" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/del2Sketch/feet0202.png" :initialY="'288'" :rate="0.016" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/del2Sketch/handTight0202.png" :initialY="'278'" :rate="0.02" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/del2Sketch/handTight0203.png" :initialY="'448'" :rate="0.01" :initialX="'-10'" :rateX="0.001"></Image>
  </div>
</template>