<script setup lang="ts">
import ImageCrack from '../atoms/ImageCrack.vue';

</script>

<template>
    <div class="h-screen bg-[#ff00ff]">

        <div class="flex">

            <ImageCrack src="a.jpg" original-src="a.jpg" new-src="b.jpg" />
        </div>

    </div>
</template>