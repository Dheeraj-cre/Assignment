const sliderTrack = document.querySelector('.slider-track');
let currentSlide = 0;
const slidesToShow = 4;
const totalSlides = 10;

function updateSliderPosition() {
    const slideWidth = sliderTrack.children[0].getBoundingClientRect().width;
    sliderTrack.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function nextSlide() {
    if (currentSlide < totalSlides - slidesToShow) {
        currentSlide++;
        updateSliderPosition();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
    }
}

window.addEventListener('resize', updateSliderPosition);


// lalala


function updateImage() {
    const img = document.getElementById('responsive-image');
    if (window.innerWidth <= 600) {
        img.src = '/assests/wa1.jpg'; // Change to small image
    } else if (window.innerWidth <= 900) {
        img.src = '/assests/wa3.jpg'; // Change to medium image
    } else {
        img.src = '/assests/w.png'; // Default image
    }
}

window.addEventListener('resize', updateImage);
window.addEventListener('load', updateImage);