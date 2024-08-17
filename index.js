
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('show');
  sidebar.style.display = sidebar.classList.contains('show') ? 'flex' : 'none';
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

//click event for navlinks of second page 
document.addEventListener('DOMContentLoaded', () => {
    const navlinks = document.querySelectorAll('#second-navbar a');
    const foodInfoSections = document.querySelectorAll('.food-info');
    const sections = document.querySelectorAll('.second-right-container')

    navlinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('data-target');

            foodInfoSections.forEach(section => {
                section.style.display = 'none';
            });

            sections.forEach(section => {
                section.style.display = 'none';
            });

            const targetFoodSection = document.getElementById(targetId);
            if (targetFoodSection) {
                targetFoodSection.style.display = 'flex';
            }

            
            const targetRightSection = document.querySelector(`#${targetId}.second-right-container`);
            if (targetRightSection) {
                targetRightSection.style.display = 'block';
            }
        })
    })

})

// OnClick choose the size of the dessert and display acc.
const dessertSizeChoose = (size) => {

   // Remove 'active' class from all size buttons
   document.querySelectorAll('.size-options div').forEach(button => button.classList.remove('active'));

   // Add 'active' class to the clicked size button
   if (size === 'regular') {
     document.querySelector('.regular').classList.add('active');
     document.querySelectorAll('.nutrients-first-row a, .nutrients-first-row p').forEach(el => el.classList.remove('active'));
     document.querySelectorAll('.energy-regular, .protein-regular, .fat-regular, .sat-fat-regular', 'trans-fat-regular').forEach(el => el.classList.add('active'));
     document.querySelectorAll('.energy-medium, .protein-medium, .fat-medium, .sat-fat-medium','trans-fat-medium').forEach(el => el.classList.remove('active'));
   } else if (size === 'medium') {
     document.querySelector('.medium').classList.add('active');
     document.querySelectorAll('.nutrients-first-row a, .nutrients-first-row p').forEach(el => el.classList.remove('active'));
     document.querySelectorAll('.energy-medium, .protein-medium, .fat-medium, .sat-fat-medium', 'trans-fat-medium').forEach(el => el.classList.add('active'));
     document.querySelectorAll('.energy-regular, .protein-regular, .fat-regular, .sat-fat-regular', 'trans-fat-regular').forEach(el => el.classList.remove('active'));
   }

}