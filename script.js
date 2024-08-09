let currentSlide = 0;
let direction = 1;  // 1 for forward, -1 for backward

function showNextSlide() {
    const slides = document.querySelectorAll('.banner-slide');
    const totalSlides = slides.length;

    // Move to the next slide based on the direction
    currentSlide += direction;

    // Check if we've reached the end or start of the slide sequence
    if (currentSlide === totalSlides - 1 || currentSlide === 0) {
        direction *= -1; // Reverse the direction
    }

    // Apply the transform to show the current slide
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

// Set interval to 25 seconds (25000 milliseconds)
setInterval(showNextSlide, 10000);