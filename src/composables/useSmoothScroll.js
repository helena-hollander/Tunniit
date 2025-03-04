export default function useSmoothScroll() {
  const smoothScrollTo = (targetY, duration = 1000) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    const easeInOutQuad = (time, from, distance, duration) => {
      time /= duration / 2;
      if (time < 1) return (distance / 2) * time * time + from;
      time--;
      return (-distance / 2) * (time * (time - 2) - 1) + from;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startY, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return {
    smoothScrollTo,
  };
}