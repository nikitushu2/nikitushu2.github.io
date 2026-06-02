const container = document.querySelector('.scroll-container');
const pages = document.querySelectorAll('.page');
let current = 0;
let locked = false;

window.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (locked) return;

  if (e.deltaY > 0 && current < pages.length - 1) current++;
  else if (e.deltaY < 0 && current > 0) current--;
  else return;

  locked = true;
  container.scrollTo({ left: current * window.innerWidth, behavior: 'smooth' });
  setTimeout(() => { locked = false; }, 800);
}, { passive: false });

tsParticles.load("intro-particles", {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  particles: {
    color: { value: "#ff6161" },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "out" },
      random: true,
      speed: 0.3,
      straight: false,
    },
    number: {
      density: { enable: true },
      value: 160,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 3,
        sync: false,
      },
      value: { min: 0, max: 1 },
    },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
});
