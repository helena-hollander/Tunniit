<script setup>
import { ref, onMounted } from 'vue'
import Image from '@/components/atoms/Image.vue';


const setInitialPosition = () => {
    const target = document.querySelectorAll('.para');
    target.forEach(element => {
        const initialY = element.dataset.initialY || '0px';
        element.style.transform = `translate3d(0px, ${initialY}, 0px)`;
    });
};

const updatePositionOnScroll = () => {
    const target = document.querySelectorAll('.para');
    target.forEach(element => {
        const rate = parseFloat(element.dataset.rate) || 0;
        const initialY = parseFloat(element.dataset.initialY) || 0;
        const pos = window.pageYOffset * rate;
        element.style.transform = `translate3d(0px, ${initialY + pos}px, 0px)`;
    });
};

onMounted(() => {
    setInitialPosition();
    window.addEventListener('scroll', updatePositionOnScroll);
});

</script>
<template>
    <header class="h-[200vh]">
        <Image imagePath="src/assets/images/smoke1.png" class="para absolute" ></Image>
        <Image imagePath="src/assets/images/smoke2.png" class="para absolute" data-initial-y="-10px" data-rate="0.1"></Image>
        <Image imagePath="src/assets/images/smoke3.png" class="para absolute" ></Image>
   
        <!-- High date-rate number,the quicker it scrolls upwards. 1 keeps it stuck. 0 or no prop keeps it at regular pace-->
    </header>

    <!-- Hvordan giver jeg image ny position, uden min scroll index overule, men 'tilføjer' -->
    <!-- Composable function? Tilgå funktionen, selvom den ref til classer i hvert billede?-->
</template>