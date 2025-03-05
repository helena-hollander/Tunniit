<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
// import useScrollers from '../../composables/useScrollers';
import useCrack from '@/composables/useCrack';

const props = defineProps([
    'newSrc',
    'originalSrc'
]);


const { scrollers, setInitialPosition } = useCrack();

// const scroller = ref(null);
onMounted(() => {
  setInitialPosition();
})
</script>

<template>
    
    <img :ref="el => scrollers.push(el)" class="h-[25vh] w-[25vh] bg-[#ff0000]" :data-new-src="props.newSrc" :data-original-src="props.originalSrc" />
<!-- <img alt="image" :ref="el => scrollers.push(el)" :class="[
  'absolute',
  'opacity-100',
  'w-full',
  z ? `translate-z-${z}` : ''
  ]" :data-initial-y="props?.initialY" :data-rate="props?.rate" :data-initial-x="props?.initialX" :data-rate-x="props?.rateX" :data-initial-scale="props?.initialScale" :data-scale-to="props?.scaleTo" />  -->
</template>