document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
  });
});


// Testimonial slider script
document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  const slideInterval = 5000; // 5 seconds
  let timer;

  
  function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.opacity = i === index ? '1' : '0';
      testimonial.style.position = i === index ? 'relative' : 'absolute';
      testimonial.style.zIndex = i === index ? '1' : '0';
      dots[i].classList.toggle('active', i === index);
      dots[i].setAttribute('aria-selected', i === index ? 'true' : 'false');
      dots[i].tabIndex = i === index ? 0 : -1;
    });
    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % testimonials.length;
    showSlide(nextIndex);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      showSlide(index);
      timer = setInterval(nextSlide, slideInterval);
    });
  });

  // Initialize slider
  showSlide(0);
  timer = setInterval(nextSlide, slideInterval);

  // Reveal projects on scroll with debounce
  const projectCards = document.querySelectorAll('.project-card');

  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    projectCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const revealPoint = 150;
      if (cardTop < windowHeight - revealPoint) {
        card.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', debounce(revealOnScroll));
  revealOnScroll();
});
