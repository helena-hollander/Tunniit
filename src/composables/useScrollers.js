import { ref, onMounted, watch, onUnmounted } from 'vue'


const scrollers = ref([]);

export default function useScrollers() {

  const setInitialPosition = () => {
    if(scrollers.value.length) {
      scrollers.value.forEach(scroller => {
        const initialY = scroller.dataset.initialY || '0px';
        const initialX = scroller.dataset.initialX || '0px';
        scroller.style.transform = `translate3d(${initialX}vw, ${initialY}vw, 0px)`;
      }
      );
    }
    // if(scroller.value) {
    //   const initialY = scroller.value.dataset.initialY || '0px';
    //   scroller.value.style.transform = `translate3d(0px, ${initialY}, 0px)`;
    // }
  }
  
  const updatePositionOnScroll = () => {
    scrollers.value.forEach(scroller => {
      if(!scroller) return;
      const rate = parseFloat(scroller.dataset.rate) || 0;
      const initialY = parseFloat(scroller.dataset.initialY) || 0;
      const rateX = parseFloat(scroller.dataset.rateX) || 0;
      const initialX = parseFloat(scroller.dataset.initialX) || 0;
      const pos = window.pageYOffset * rate;
      const posX = window.pageYOffset * rateX;
      scroller.style.transform = `translate3d(${initialX + posX}vw, ${initialY + pos}vw, 0px)`;
    });
    // if(!scroller.value) return;
    // const rate = parseFloat(scroller.value.dataset.rate) || 0;
    // const initialY = parseFloat(scroller.value.dataset.initialY) || 0;
    // const pos = window.pageYOffset * rate;
    // scroller.value.style.transform = `translate3d(0px, ${initialY + pos}px, 0px)`;
  };
  
  onMounted(() => {
      
      window.addEventListener('scroll', updatePositionOnScroll);
  });
  
  onUnmounted(() => {
      window.removeEventListener('scroll', updatePositionOnScroll);
  });

  return {
    scrollers,
    setInitialPosition
  }
}