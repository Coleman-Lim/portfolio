function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")

}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = document.getElementById('closeBtn');
    const cards = document.querySelectorAll('.card img');

    cards.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      });
    });

    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      lightboxImg.src = '';
    });

    // Optional: clicking outside image closes the lightbox
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
      }
    });