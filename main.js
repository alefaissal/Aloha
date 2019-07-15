document.addEventListener("DOMContentLoaded", function () {
  // all of your JS code goes here

});

//Code for the caroussel
const elem = document.querySelector('.main-carousel');
const flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  wrapAround: true,
  freeScroll: true
});

//Code for the message from the subscribe button
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

// Shopping cart code to add number and color 
const cartCount = document.getElementById("shopping-number");

const productCart1 = document.getElementById("product1-cart");
const productCart2 = document.getElementById("product2-cart");
const productCart3 = document.getElementById("product3-cart");
const productCart4 = document.getElementById("product4-cart");
const productCart5 = document.getElementById("product5-cart");
const productCart6 = document.getElementById("product6-cart");
const productCart7 = document.getElementById("product7-cart");
const productCart8 = document.getElementById("product8-cart");

let click = 0;

productCart1.addEventListener("click", function (event){
  console.log("adding to shopping cart");
  click++;
  cartCount.innerHTML = click;
  cartCount.style.backgroundColor = "red";
});
productCart2.addEventListener("click", function (event){
  console.log("adding to shopping cart");
  click++;
  cartCount.innerHTML = click;
  cartCount.style.backgroundColor = "red";
});
productCart3.addEventListener("click", function (event){
  console.log("adding to shopping cart");
  click++;
  cartCount.innerHTML = click;
  cartCount.style.backgroundColor = "red";
});
productCart4.addEventListener("click", function (event){
  console.log("adding to shopping cart");
  click++;
  cartCount.innerHTML = click;
  cartCount.style.backgroundColor = "red";
});
productCart5.addEventListener("click", function (event){
  console.log("adding to shopping cart");
  click++;
  cartCount.innerHTML = click;
  cartCount.style.backgroundColor = "red";
});
productCart6.addEventListener("click", function (event){
  console.log("adding to shopping cart");
  click++;
  cartCount.innerHTML = click;
  cartCount.style.backgroundColor = "red";
});
productCart7.addEventListener("click", function (event){
  console.log("adding to shopping cart");
  click++;
  cartCount.innerHTML = click;
  cartCount.style.backgroundColor = "red";
});
productCart8.addEventListener("click", function (event){
  console.log("adding to shopping cart");
  click++;
  cartCount.innerHTML = click;
  cartCount.style.backgroundColor = "red";
});

