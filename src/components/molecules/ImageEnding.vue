<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Image from '@/components/atoms/Image.vue';
</script>

<template>
<div class="relative translate-y-[-500px]">
<Image src="/images/del4Sketch/bg0401.png"></Image>
<Image src="/images/del4Sketch/cry0401.png" :initialY="'0'" :rate="0" :initialX="'0'" :rateX="0"></Image>
</div>
</template>