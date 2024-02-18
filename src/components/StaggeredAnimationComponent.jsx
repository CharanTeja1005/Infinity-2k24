import React, { useEffect } from 'react';
import anime from 'animejs'; // Import anime.js library
import '../stylesheets/StaggeredAnimationComponentStyle.css'

const StaggeredAnimationComponent = () => {
  useEffect(() => {
    const fitElementToParent = (el, padding) => {
      let timeout = null;
      function resize() {
        if (timeout) clearTimeout(timeout);
        anime.set(el, { scale: 1 });
        const pad = padding || 0;
        const parentEl = el.parentNode;
        const elOffsetWidth = el.offsetWidth - pad;
        const parentOffsetWidth = parentEl.offsetWidth;
        const ratio = parentOffsetWidth / elOffsetWidth;
        timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
      }
      resize();
      window.addEventListener('resize', resize);
    };

    const staggerVisualizerEl = document.querySelector(`.${styles['stagger-visualizer']}`);

    const grid = [20, 10];
    const cell = 55;
    const numberOfElements = grid[0] * grid[1];

    fitElementToParent(staggerVisualizerEl, 0);

    // Animation logic
    // Place your animation logic here, using anime.js

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <div className='animation-wrapper'>
      <div className='stagger-visualizer'>
        <div className='cursor color-red'></div>
        <div className='dots-wrapper'></div>
      </div>
    </div>
  );
};

export default StaggeredAnimationComponent;
