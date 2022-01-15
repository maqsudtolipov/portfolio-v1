// show alert after 3 seconds
// setTimeout(function() {
//   alert('Hello my friend! Sorry for the alert, but I have to tell you something that my website is still under construction. I will be back soon! 😉👌' );
// }, 3000);

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});
