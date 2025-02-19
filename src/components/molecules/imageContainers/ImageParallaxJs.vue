<script setup>
import { ref } from 'vue'
import Image from '@/components/atoms/Image.vue';


window.addEventListener('scroll', function(e) {
    const target = this.document.querySelectorAll('.para');

    var index = 0,length = target.length;
    for(index; index < length; index++){
        var pos = this.window.pageYOffset * target[index].dataset.rate;
        target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
    }

    // var scrolled = window.pageYOffset;
    // var rate = scrolled * 0.2;
    // target.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
    // console.log('scrolling');
});

</script>
<template>
    <header class="h-[200vh]">
        <!-- <Image imagePath="src/assets/images/mirror.jpg" class="para"></Image> -->
        <Image imagePath="src/assets/images/smoke1.png" class="para absolute" data-rate="0.5"></Image> 
        <Image imagePath="src/assets/images/smoke2.png" class="para absolute" ></Image>
        <Image imagePath="src/assets/images/smoke3.png" class="para absolute" data-rate="-1"></Image>
        <!-- High date-rate number,the quicker it scrolls upwards. 1 keeps it stuck. 0 or no prop keeps it at regular pace-->
    </header>
</template>