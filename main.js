const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('.logo-pic');
const body = document.querySelector('body');

/* display mobile menu */
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

/* scroll */
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }

/* slider animation */
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

//close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
	const menuBars = document.querySelector('.is-active');
	if (window.innerWidth <= 768 && menuBars) {
		menu.classList.toggle('is-active');
		menuLinks.classList.remove('active');
	}
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

/* scroll animation */
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-main', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
})

gsap.from('.animate-about-us', {
    scrollTrigger: '.animate-about-us',
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.3
})

gsap.from('.animate-img', {
    scrollTrigger: '.animate-about-us',
    duration: 1.2,
    opacity: 0,
    x: -200,
})

gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
})

gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2
})

gsap.from('.animate-stylists', {
    scrollTrigger: '.animate-stylists',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2
})

gsap.from('.animate-collections', {
    scrollTrigger: '.animate-collections',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 0.6
})