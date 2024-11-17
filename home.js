let currentIndex = 0;

function showSlides(index) {
    const slide = document.querySelectorAll('.carousel-item');
    const totalSlides = slide.length;

    if (index >= slide.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slide.length -1;
    }

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

  function nextSlide() {
    showSlides(currentIndex + 1);
  }
  
  function prevSlide() {
    showSlides(currentIndex - 1);
  }

