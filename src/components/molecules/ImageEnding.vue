<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Image from '@/components/atoms/Image.vue';
</script>

<template>
<div class="relative translate-y-[-500px] ">
<Image src="/images/del4Sketch/bg0401.png"></Image>
<Image src="/images/del4Sketch/hageBlood0401.png" :initialY="'140'" :rate="-0.008" :initialX="'0'" :rateX="0"></Image>
<Image src="/images/del4Sketch/couch0401.png" :initialY="'110'" :rate="-0.004" :initialX="'0'" :rateX="0"></Image>
<Image src="/images/del4Sketch/mirrorZoomOut0401.png" :initialY="'100'" :rate="-0.002" :initialX="'-100'" :rateX="0.0046"></Image>
<Image src="/images/del4Sketch/shards0401.png" :initialY="'140'" :rate="-0.004" :initialX="'0'" :rateX="0"></Image>
<Image src="/images/del4Sketch/mirror0401.png" :initialY="'0'" :rate="0.004" :initialX="'0'" :rateX="0"></Image>
</div>
</template>