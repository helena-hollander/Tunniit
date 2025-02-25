<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Image from '@/components/atoms/Image.vue';
</script>

<template>
  <header class="h-[500vh] overflow-x-hidden relative bg-sky-800"> <!-- overflow-x-hidden og relative, sikrer, at jeg ikke får en horizontal scrollbar -->
     <Image src="src/assets/images/mirrorShards/smoke1.png" :initialY="'0'" :rate="-0.005" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/mirrorShards/duo1.png" :initialY="'-4'" :rate="0.005" :initialX="'-4'" :rateX="0.008"></Image>
     <Image src="src/assets/images/mirrorShards/decision1.png" :initialY="'1'" :rate="0" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/mirrorShards/coat1.png" :initialY="'100'" :rate="-0.01" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/mirrorShards/couch1.png" :initialY="'136'" :rate="0" :initialX="'0'" :rateX="0"></Image>

    <!-- High date-rate number,the quicker it scrolls upwards. 1 keeps it stuck. 0 or no prop keeps it at regular pace-->
</header>
</template>