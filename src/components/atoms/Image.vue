<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import useScrollers from '@/composables/useScrollers';

const props = defineProps(['z', 'initialY', 'rate', 'initialX', 'rateX']);


const { scrollers, setInitialPosition } = useScrollers();

// const scroller = ref(null);
onMounted(() => {
  //setInitialPosition();
})
</script>

<template>
<img alt="image" :ref="el => scrollers.push(el)" 
:style="{ marginTop: initialY + 'vw', transform: `translate3d(0,-50%,${rate}vw) scale(${1 + (- rate) / 10})` }"

:class="[
  'relative',
  'opacity-70',
  'w-full',
  z ? `translate-z-${z}` : ''
  ]" :data-initial-y="props?.initialY" :data-rate="props?.rate" :data-initial-x="props?.initialX" :data-rate-x="props?.rateX"/> 
</template>

