const images = ['images/image1.png', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg'];
let currentIndex = 0;
let intervalId;

const carouselImage = document.getElementById('carouselImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(index) {
  carouselImage.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function startCarousel() {
  intervalId = setInterval(nextImage, 3000);
}

function stopCarousel() {
  clearInterval(intervalId);
}

nextBtn.addEventListener('click', () => {
  stopCarousel();
  nextImage();
  startCarousel();
});

prevBtn.addEventListener('click', () => {
  stopCarousel();
  prevImage();
  startCarousel();
});

document.addEventListener('DOMContentLoaded', () => {
  showImage(currentIndex);
  startCarousel();
});
