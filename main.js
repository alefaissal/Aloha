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

const email = document.getElementById("emailId");
const subscribe = document.getElementById("subscribeId");

subscribe.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Form submitted");
  const trimValue = email.value.trim();
  if (trimValue === "") {
    alert("Please enter a valid email");
  } else {
    alert("Thank you for subscribe");
  }
});