var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}sss
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
});

.gradient-button.clicked {
 
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
}
