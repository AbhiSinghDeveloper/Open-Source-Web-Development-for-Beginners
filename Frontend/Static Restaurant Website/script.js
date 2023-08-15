// swiper
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
}); 


// year update
const yearUpdate = new Date().getFullYear();
const year = document.getElementById('year').innerHTML = yearUpdate;


// aos animation
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false,
});





// navbar mobile
const checkbox = document.querySelector('input[type=checkbox]');
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(link => {
  link.addEventListener('click', function() {
      checkbox.checked = false;
      document.body.style.overflow = 'visible';
  });
});

checkbox.addEventListener("change", function() {
  if (check.checked) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
});