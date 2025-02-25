<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Image from '@/components/atoms/Image.vue';
</script>

<template>
  <header class=" overflow-x-hidden absolute bg-sky-800"> <!-- overflow-x-hidden og relative, sikrer, at jeg ikke får en horizontal scrollbar -->
     <Image src="src/assets/images/mirrorShards/smoke1.png" :initialY="'22'" :rate="0" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/mirrorShards/duo1.png" :initialY="'-48'" :rate="-5" :initialX="'-4'" :rateX="0.008"></Image>
     <Image src="src/assets/images/mirrorShards/decision1.png" :initialY="'-18'" :rate="-2" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/mirrorShards/coat1.png" :initialY="'-24'" :rate="1" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/mirrorShards/couch1.png" :initialY="'-24'" :rate="0" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/mirrorShards/eyes1.png" :initialY="'-18'" :rate="-3" :initialX="'6'" :rateX="-0.0015"></Image>
     <Image src="src/assets/images/mirrorShards/needle1.png" :initialY="'-58'" :rate="-1" :initialX="'10'" :rateX="-0.002"></Image>
     <Image src="src/assets/images/mirrorShards/relax1.png" :initialY="'-36'" :rate="2" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/mirrorShards/shards1.png" :initialY="'-272'" :rate="-1" :initialX="'0'" :rateX="0"></Image>
     <Image src="src/assets/images/mirrorShards/shard102.png" :initialY="'63'" :rate="1" :initialX="'0'" :rateX="0"></Image>

    <!-- High date-rate number,the quicker it scrolls upwards. 1 keeps it stuck. 0 or no prop keeps it at regular pace-->
</header>
</template>
<style>
header {
  position: absolute;
  height: 100vh;
  perspective: 10vw;
  transform-style: preserve-3d;
  perspective-origin: 50% 50vw;
}
</style>