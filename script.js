// script.js - Shared JavaScript for Endless Skys site

// === Random Background Logic (moved from HTML) ===
const backgrounds = [
  { type: 'video', src: 'assets/backgrounds/Mini4.mp4' },
  { type: 'video', src: 'assets/backgrounds/Matrice4TD.mp4' },
  { type: 'image', src: 'assets/backgrounds/sky-hero.jpg' },
  { type: 'image', src: 'assets/backgrounds/aerial-farm.jpg' },
  { type: 'image', src: 'assets/backgrounds/blue-sky-drone.jpg' },
  { type: 'video', src: 'assets/backgrounds/Drone-over-fields.mp4' },
  { type: 'video', src: 'assets/backgrounds/forest-drone-hover.mp4' },
  { type: 'video', src: 'assets/backgrounds/mountian-aerial-loop.mp4' },
  { type: 'video', src: 'assets/backgrounds/ocean-drone-pan.mp4' },
  { type: 'video', src: 'assets/backgrounds/sunset-drone-flyover.mp4' },
  { type: 'video', src: 'assets/backgrounds/waterfall-flight.mp4' },
  { type: 'video', src: 'assets/backgrounds/motorcycle-chase.mp4' },
];

// Avoid repeating the previous page's background
let lastUsed = localStorage.getItem('lastBackground') || '';
let available = backgrounds.filter(b => b.src !== lastUsed);
if (available.length === 0) available = backgrounds;
const chosen = available[Math.floor(Math.random() * available.length)];
localStorage.setItem('lastBackground', chosen.src);

// Apply when page loads
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  if (chosen.type === 'video') {
    const videoHTML = `
      <video class="hero-video" autoplay muted loop playsinline>
        <source src="${chosen.src}" type="video/mp4">
        <img src="assets/backgrounds/sky-hero.jpg" alt="Fallback aerial view">
      </video>
    `;
    hero.insertAdjacentHTML('afterbegin', videoHTML);
  } else {
    hero.style.background = `linear-gradient(rgba(195, 218, 254, 0.55), rgba(195, 218, 254, 0.55)), url('${chosen.src}') center/cover no-repeat fixed`;
  }
});

// === Hamburger menu toggle for mobile nav ===
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Optional: turn hamburger into X when open
      hamburger.classList.toggle('active');
    });

    // Close menu when clicking any link (better mobile UX)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
});