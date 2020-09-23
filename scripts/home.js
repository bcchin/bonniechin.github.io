// SLIDESHOW FUNCTIONALITIES
var slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Controls
function changeSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail Image Controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-image");
  if (n > slides.length)
    {
      slideIndex = 1
    }
  if (n < 1)
  {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++)
  {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
