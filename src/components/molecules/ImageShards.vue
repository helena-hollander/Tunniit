<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Image from '@/components/atoms/Image.vue';
</script>

<template>
  <div class="z-1 h-[580vh] relative bg-sky-900"> <!-- overflow-x-hidden og relative, sikrer, at jeg ikke får en horizontal scrollbar -->
    <div class="absolute h-[800px] w-full bg-sky-900 translate-y-[4700px]"></div>
     <Image src="/images/sketchShards/smoke_sketch01.png" :initialY="'0'" :rate="-0.005" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/sketchShards/decision_sketch01.png" :initialY="'28'" :rate="0" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/sketchShards/duo_sketch01.png" :initialY="'16'" :rate="0.012" :initialX="'-4'" :rateX="0.008"></Image>
     <Image src="/images/sketchShards/coat_sketch01.png" :initialY="'116'" :rate="-0.01" :initialX="'0'" :rateX="0"></Image>
     <Image src="/images/sketchShards/couch_sketch01.png" :initialY="'166'" :rate="0" :initialX="'4'" :rateX="-0.002"></Image>
     <Image src="/images/sketchShards/eyes_sketch01.png" :initialY="'170'" :rate="0.015" :initialX="'6'" :rateX="-0.0015"></Image>
     <Image src="/images/sketchShards/needle_sketch01.png" :initialY="'296'" :rate="-0.025" :initialX="'8'" :rateX="-0.002"></Image>
     <!-- <Image src="/images/sketchShards/eye_sketch0102.png" :initialY="'228'" :rate="0.0158" :initialX="'0'" :rateX="0"></Image> -->
     <!-- <Image src="/images/sketchShards/shards_sketch01.png" :initialY="'1'" :rate="0.01" :initialX="'0'" :rateX="0"></Image> -->
     <Image src="/images/sketchShards/shards_sketch01.png" :initialY="'202'" :rate="-0.004" :initialX="'0'" :rateX="0"></Image>
    <!-- High date-rate number,the quicker it scrolls upwards. 1 keeps it stuck. 0 or no prop keeps it at regular pace-->
  </div>
</template>