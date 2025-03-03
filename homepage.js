const slides = document.querySelector('.s2-slides');
const images = document.querySelectorAll('.s2-slides img');
const prevBtn = document.querySelector('.s2-prev');
const nextBtn = document.querySelector('.s2-next');

let counter = 0;
const size = images[0].clientWidth;

// Event listeners for buttons
nextBtn.addEventListener('click', () => {
  if(counter >= images.length - 1) return; // Stop at last slide
  counter++;
  slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if(counter <= 0) return;
  counter--;
  slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
});