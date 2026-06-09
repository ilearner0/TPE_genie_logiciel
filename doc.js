

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function () {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '65px';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = '#0A192F';
    navLinks.style.padding = '20px 8%';
    navLinks.style.gap = '15px';
  }
});


document.querySelectorAll('a[href^="#"]').forEach(function (lien) {
  lien.addEventListener('click', function (e) {
    e.preventDefault();
    const cible = document.querySelector(this.getAttribute('href'));
    if (cible) {
      cible.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

