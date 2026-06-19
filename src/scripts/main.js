'use strict';

const images = [
  './src/images/photo-header.jpg',
  './src/images/slider/header-slider-laptop.jpg',
  './src/images/slider/header-slider-headphone.jpg',
];

let currentIndex = 0;

const image = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  image.src = images[currentIndex];
});
