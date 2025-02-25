<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Image from '@/components/atoms/Image.vue';
</script>
<template>
    <header class="h-[200vh] overflow-x-hidden relative"> <!-- overflow-x-hidden og relative, sikrer, at jeg ikke får en horizontal scrollbar -->
        <Image src="src/assets/images/smoke1.png" ></Image>
        <!-- <Image imagePath="src/assets/images/smoke2.png" :ref="el => scrollers.push(el)" data-initial-y="-10px" data-rate="0.1"></Image> -->
        <Image src="src/assets/images/smoke2.png" :initialY="'-10px'" :rate="0.1" :initialX="'20px'" :rateX="10"></Image>
        <Image src="src/assets/images/smoke3.png" ></Image>
   
        <!-- High date-rate number,the quicker it scrolls upwards. 1 keeps it stuck. 0 or no prop keeps it at regular pace-->
    </header>

    <!-- Hvordan giver jeg image ny position, uden min scroll index overule, men 'tilføjer' -->
    <!-- Composable function? Tilgå funktionen, selvom den ref til classer i hvert billede?-->
</template> 