document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const navLinks = document.querySelector('.nav-links');
  
    burgerIcon.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  });
  