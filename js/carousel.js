let index = 0;
const carousel = document.getElementById('carousel-images');
const slides = carousel.children;
const totalSlides = slides.length;

function showSlide(i) {
  index = i;
  carousel.style.transform = `translateX(-${i * 100}%)`;

  // update dots
  document.querySelectorAll('button').forEach((dot, idx) => {
    dot.classList.toggle('bg-[#BC5D4B]', idx === i);
    dot.classList.toggle('bg-gray-300', idx !== i);
  });
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide(index);
}

setInterval(nextSlide, 4000); // autoplay

function goToSlide(i) {
  showSlide(i);
}