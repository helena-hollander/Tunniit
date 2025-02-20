<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import useScrollers from '@/composables/useScrollers';

const props = defineProps(['z', 'initialY', 'rate']);


const { scrollers, setInitialPosition } = useScrollers();

// const scroller = ref(null);
onMounted(() => {
  setInitialPosition();
})
</script>

<template>
<img alt="image" :ref="el => scrollers.push(el)" :class="[
  'absolute',
  z ? `translate-z-${z}` : ''
  ]" :data-initial-y="props?.initialY" :data-rate="props?.rate"/> 
</template>