let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
  },
});


const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', function() {
  if(window.scrollY > 50) {
    navbar.classList.add('active')
  } else {
    navbar.classList.remove('active')
  }
})
