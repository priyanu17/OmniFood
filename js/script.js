// adding current year in copyright msg
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const mobileBtnEl = document.querySelector('.btn-mobile-nav');

const headerEl = document.querySelector('.header');

mobileBtnEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    console.log(e);
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (href.length > 0 && href.startsWith('#')) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({
        behavior: 'smooth',
      });

      // close mobile navigation
      if (link.classList.contains('nav-main-link')) {
        headerEl.classList.toggle('nav-open');
      }
    }
  });
});

const sectionHeroEl = document.querySelector('.section-hero');
const ob = new IntersectionObserver(
  function (entries) {
    const el = entries[0];

    if (el.isIntersecting === false) {
      document.querySelector('body').classList.add('sticky');
    }
    if (el.isIntersecting === true) {
      document.querySelector('body').classList.remove('sticky');
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
ob.observe(sectionHeroEl);
