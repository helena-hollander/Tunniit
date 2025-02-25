import { ref, onMounted, watch, onUnmounted } from 'vue'


const scrollers = ref([]);
let positionsHasBeenSet = false

export default function useScrollers() {
  

  const setInitialPosition = () => {
    if (positionsHasBeenSet) return;

    if(scrollers.value.length) {
      scrollers.value.forEach(scroller => {
        const initialY = scroller.dataset.initialY || '0px';
        const initialX = scroller.dataset.initialX || '0px';
        //scroller.style.transform = `translate3d(${0}vw, calc(-50%), 0px)`;
      }
      );
    }
    scrollers.value.forEach(scroller => {
      const scrollerLayoutPosition = scroller.getBoundingClientRect();
      console.log(scrollerLayoutPosition.height)
    })
    positionsHasBeenSet = true
    // if(scroller.value) {
    //   const initialY = scroller.value.dataset.initialY || '0px';
    //   scroller.value.style.transform = `translate3d(0px, ${initialY}, 0px)`;
    // }
  }
  setTimeout(() => {
    setInitialPosition();
  }, 1000)
  
  const updatePositionOnScroll = () => {
    scrollers.value.forEach(scroller => {
      if (!scroller) return;
      const rate = parseFloat(scroller.dataset.rate) || 0;
      const initialY = parseFloat(scroller.dataset.initialY) || 0;
      const rateX = parseFloat(scroller.dataset.rateX) || 0;
      const initialX = parseFloat(scroller.dataset.initialX) || 0;
      const scrollerLayoutPosition = scroller.getBoundingClientRect();
      const scrollerCenter = scrollerLayoutPosition.y + scrollerLayoutPosition.height / 2;
      const pos = (window.pageYOffset - scrollerCenter) * rate;
      const posX = window.pageYOffset * rateX;
      //scroller.style.transform = `translate3d(${initialX}px, ${initialY + pos}px, 0px)`;
    });
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