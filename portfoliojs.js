var imgs = document.querySelectorAll('.first-testimonial');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide

function changeSlide(n) {

    
    for (var i = 0; i < imgs.length; i++) { // reset
      imgs[i].style.opacity = 0;
      imgs[i].style.display = "block"
      
      dots[i].className = dots[i].className.replace(' active', '');
    }
  
    currentImg = n;
  
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
  }