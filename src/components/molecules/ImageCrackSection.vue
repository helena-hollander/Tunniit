<script setup lang="ts">
import { ref } from 'vue';
import ImageCrack from '../atoms/ImageCrack.vue';
import useCrack from '@/composables/useCrack.js';
const { divHasBg } = useCrack();

</script>

<template>
    <div class="h-[300vh] w-full ">
        <div >
            <ImageCrack class="w-full object-cover z-20" src="/images/del4Sketch/cry0301.png" original-src="/images/del4Sketch/cry0301.png" new-src="/images/del4Sketch/wakingShard0301.png" />
        </div>
        <div class="h-[180vh] w-full bg-sky-900 top-0"></div>

    </div>
</template>