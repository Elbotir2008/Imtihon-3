// Get the button
let mybutton = document.getElementById("myBtn");
let headerTop = document.getElementById("header-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myFunction() {
  headerTop.style.display = "none";
}

function myFunc() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
