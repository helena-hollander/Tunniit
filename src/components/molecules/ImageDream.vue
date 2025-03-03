<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Image from '@/components/atoms/Image.vue';
</script>

<template>
  <div class="h-[500vh] overflow-x-hidden relative translate-y-[-800px]"> <!-- overflow-x-hidden og relative, sikrer, at jeg ikke får en horizontal scrollbar -->
     <Image src="src/assets/images/del2Sketch/underWater02.png" :initialY="'16'" :initialScale="'0.8'" :scaleTo="'1'" :rate="-0.004" :initialX="'0'" :rateX="0" class="z-10 origin-bottom"></Image>
     <!-- origin-bottom gør at den vokser fra nederst midten -->
     <Image src="src/assets/images/del2Sketch/sinking0201.png" :initialY="'12'" :rate="0.016" :initialX="'0'" :rateX="0" ></Image>
     <Image src="src/assets/images/del2Sketch/sinking0202.png" :initialY="'92'" :rate="0.014" :initialX="'0'" :rateX="0" ></Image>
  </div>
</template>