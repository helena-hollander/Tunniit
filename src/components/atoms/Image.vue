<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import useScrollers from '../../composables/useScrollers';

const props = defineProps(['z', 'initialY', 'rate', 'initialX', 'rateX', 'initialScale', 'scaleTo']);


const { scrollers, setInitialPosition } = useScrollers();

// const scroller = ref(null);
onMounted(() => {
  setInitialPosition();
})
</script>

<template>
<img alt="image" :ref="el => scrollers.push(el)" :class="[
  'absolute',
  'opacity-100',
  'w-full',
  z ? `translate-z-${z}` : ''
  ]" :data-initial-y="props?.initialY" :data-rate="props?.rate" :data-initial-x="props?.initialX" :data-rate-x="props?.rateX" :data-initial-scale="props?.initialScale" :data-scale-to="props?.scaleTo" /> 
</template>