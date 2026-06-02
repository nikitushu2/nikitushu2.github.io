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
