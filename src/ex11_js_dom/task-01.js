const slider = document.querySelector('.slider');
let last = slider.lastElementChild;
let first = slider.firstElementChild;
const btn = document.querySelectorAll('.btn');

function showSlider() {
  slider.insertBefore(last, first);

  function movement(e) {
    last = slider.lastElementChild;
    first = slider.firstElementChild;

    const activeSlide = document.querySelector('.active');

    if (e.target.id === 'next') {
      slider.insertBefore(first, last.nextSibling);

      activeSlide.classList.remove('active');
      activeSlide.nextElementSibling.classList.add('active');
    } else {
      slider.insertBefore(last, first);
      activeSlide.classList.remove('active');
      activeSlide.previousElementSibling.classList.add('active');
    }
  }

  btn.forEach((e) => {
    e.addEventListener('click', movement);
  });
}
showSlider();
