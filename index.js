
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.style.display === 'flex') {
      sidebar.style.display = 'none';
  } else {
      sidebar.style.display = 'flex';
  }
}


function handleScroll() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);
  

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const images = document.querySelectorAll('.image-gallary .image-slide');

const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
    nextImage('prev');
});

next.addEventListener('click', () => {
    nextImage('next');
});

function nextImage(direction) {
    if (direction === 'next') {
        index++;
        if (index >= totalImages) {
            index = 0;
        }
    } else {
        if (index <= 0) {
            index = totalImages - 1;
        } else {
            index--;
        }
    }

    images.forEach(img => img.classList.remove('main-slide'));
    images[index].classList.add('main-slide');
}


const texts  = document.querySelectorAll('.text-slide');

const totalTexts = texts.length;

prev.addEventListener('click', () => {
    nextText('prev');
});

next.addEventListener('click', () => {
    nextText('next');
});

function nextText(direction) {
    if (direction === 'next') {
        index++;
        if (index >= totalTexts) {
            index = 0;
        }
    } else {
        if (index <= 0) {
            index = totalTexts - 1;
        } else {
            index--;
        }
    }

    texts.forEach(text => text.classList.remove('main-slide'));
    texts[index].classList.add('main-slide');
}