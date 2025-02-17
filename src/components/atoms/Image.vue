<script setup>
const props = defineProps(['imagePath', 'z']);

console.log(props.imagePath);
</script>

<template>
<img :src="imagePath" alt="image" :class="z ? `translate-z-${z}` : ''"/> 
</template>