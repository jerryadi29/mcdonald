
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('show');
  sidebar.style.display = sidebar.classList.contains('show') ? 'flex' : 'none';
  /*
  if (sidebar.style.display === 'flex') {
      sidebar.style.display = 'none';
  } else {
      sidebar.style.display = 'flex';
  }
      */
}


function handleScroll() {
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('logo');
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
    logo.src = 'https://mcdindia.com/wp-content/uploads/2020/01/m-logo-big.svg';
  } else {
    navbar.classList.remove('scrolled');
    logo.src = 'https://mcdindia.com/wp-content/uploads/2020/04/logo-symbol.svg';
  }
}

window.addEventListener('scroll', handleScroll);
  
//previous and next button are to slide the images to left and right
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


//shows index of images to show on page during slide
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



//this deals with text written on left container of main section to slide the text 
const texts  = document.querySelectorAll('.text-slide');

const totalTexts = texts.length;

prev.addEventListener('click', () => {
    nextText('prev');
});

next.addEventListener('click', () => {
    nextText('next');
});



//index of text on page when page slides
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