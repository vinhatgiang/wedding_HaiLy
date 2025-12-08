// ===== PERFORMANCE OPTIMIZATION =====

// 1. Lazy Load Images using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
  // Lazy load images with data-src
  const imageElements = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
          img.classList.add('lazy-loaded');
        }
      });
    });

    imageElements.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    imageElements.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }

  // 2. Optimize video playback
  const audioElement = document.getElementById('my_audio');
  if (audioElement) {
    audioElement.preload = 'none';
  }
});

// 3. Debounce function for scroll and resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 4. Optimize scroll function
const scrollFunction = debounce(function() {
  const scrollButton = document.getElementById('toTop');
  if (!scrollButton) return;
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
}, 100);

window.addEventListener('scroll', scrollFunction, { passive: true });

// 5. Preload critical images
function preloadCriticalImages() {
  const criticalImages = [
    'image/1.jpg',
    'image/10.jpg',
    'image/favicon.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// 6. Enable CSS animations only when user prefers reduced motion
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  // Apply animations
  document.documentElement.style.setProperty('--animation-enabled', '1');
} else {
  // Disable animations for accessibility
  document.documentElement.style.setProperty('--animation-enabled', '0');
}

// 7. Optimize font loading
if ('fonts' in document) {
  document.fonts.ready.then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
}

// 8. Service Worker registration for offline support (if available)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Uncomment when service worker is available
    // navigator.serviceWorker.register('sw.js');
  });
}

// 9. Minimize repaints and reflows
function requestAnimationFrameOptimized(callback) {
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(callback);
  } else {
    setTimeout(callback, 1000 / 60);
  }
}

// 10. Optimize DOM queries with caching
const cachedElements = {};

function getCachedElement(selector) {
  if (!cachedElements[selector]) {
    cachedElements[selector] = document.querySelector(selector);
  }
  return cachedElements[selector];
}

// 11. Batch DOM updates
function batchDOMUpdates(updates) {
  const fragment = document.createDocumentFragment();
  updates.forEach(update => {
    const element = update.element;
    const content = update.content;
    element.textContent = content;
  });
}

console.log('Performance optimizations loaded');
