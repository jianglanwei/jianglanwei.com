// Lazy Video: Only play video when it is on screen:

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;
    const fileName = video.currentSrc.split('/').pop() || "Video";
    
    if (entry.isIntersecting) {
        // Play when visible:
        video.play().then(() => {
        console.log(`Playing: ${fileName}`);
      }).catch(() => {
        // Browser blocks autoplay:
        console.warn(`Blocked: ${fileName}`);
      });
    } else {
      // Pause when off-screen:
      video.pause();
      console.log(`Paused: ${fileName}`)
    }
  });
}, { 
  threshold: 0.1 // Trigger when at least 10% of the video is visible
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('video').forEach(video => {
    videoObserver.observe(video);
  });
});