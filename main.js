document.addEventListener("DOMContentLoaded", function () {
  // all of your JS code goes here

});
const elem = document.querySelector('.main-carousel');
const flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  wrapAround: true,
  freeScroll: true
});