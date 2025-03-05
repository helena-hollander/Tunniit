import { ref, onMounted, watch, onUnmounted } from 'vue'


const scrollers = ref([]);

export default function useCrack() {

  const setInitialPosition = () => {
    if(scrollers.value.length) {
      scrollers.value.forEach(scroller => {
        // const initialY = scroller.dataset.initialY || '0px';
        // const initialX = scroller.dataset.initialX || '0px';
        // const initialScale = scroller.dataset.initialScale || '1';
        // scroller.style.transform = `translate3d(${initialX}vw, ${initialY}vw, 0px) scale(${initialScale})`;
      }
      );
    }
  }
  
  const updatePositionOnScroll = () => {
    scrollers.value.forEach(scroller => {
      if(!scroller) return;
//       const rate = parseFloat(scroller.dataset.rate) || 0;
//       const initialY = parseFloat(scroller.dataset.initialY) || 0;
//       const rateX = parseFloat(scroller.dataset.rateX) || 0;
//       const initialX = parseFloat(scroller.dataset.initialX) || 0;
//       const scaleTo = parseFloat(scroller.dataset.scaleTo) || 1;
//       const initialScale = parseFloat(scroller.dataset.initialScale) || 1;
//       const pos = window.pageYOffset * rate;
//       const posX = window.pageYOffset * rateX;

//       const scrollTop = window.scrollY;
//       let scale;
//       if(scroller.dataset.scaleTo){
        const scrollerPosition = scroller.getBoundingClientRect().top;
        const clientHeight = window.innerHeight; // gang client height med scale rate prop

        const percentage = scrollerPosition / clientHeight;

        const clamped = Math.min(1, Math.max(0, percentage));
        const newSrc = scroller.dataset.newSrc;
        const originalSrc = scroller.dataset.originalSrc;
        console.log(clamped);
        if(clamped < 0.001){
            scroller.src = newSrc;
        } else {
            scroller.src = originalSrc;
        } //skru p clamped < value mellem 1 og 0, for at crack det rigtge sted



//         scale = scaleTo + ((initialScale - scaleTo) * clamped);
// console.log(scale);

//         } else {
//           scale = initialScale;
//         }
//       scroller.style.transform = `translate3d(${initialX + posX}vw, ${initialY + pos}vw, 0px) scale(${scale})`;
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