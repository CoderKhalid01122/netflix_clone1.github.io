// //SELECTOR
// const faqHead = document.querySelectorAll(".faq");
// const faqBox = document.querySelectorAll(".faq-box");
// const icon = document.querySelectorAll(".icon");

// faqHead.forEach((element) => {
//   element.addEventListener("click", showFaq);

//   function showFaq() {
//     faqBox.forEach((element) => {
//       element.classList.toggle("show-faq-bar");
//       element.classList.toggle("faq-bar");
//       element.classList.toggle("d-block");
//     //   element.style.transition = ".5s ease-in";
//     });
//     icon.forEach((element) => {
//       element.classList.toggle("fa-xmark");
//     });
//     console.log("okkk");
//   }
// });

//Selectors
const faq0 = document.querySelector(".faq0");
const faq1 = document.querySelector(".faq1");
const faq2 = document.querySelector(".faq2");
const faq3 = document.querySelector(".faq3");
const faq4 = document.querySelector(".faq4");
const faq5 = document.querySelector(".faq5");

const faqBox0 = document.querySelector(".faq-box0");
const faqBox1 = document.querySelector(".faq-box1");
const faqBox2 = document.querySelector(".faq-box2");
const faqBox3 = document.querySelector(".faq-box3");
const faqBox4 = document.querySelector(".faq-box4");
const faqBox5 = document.querySelector(".faq-box5");

const icon0 = document.querySelector(".icon0");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const icon3 = document.querySelector(".icon3");
const icon4 = document.querySelector(".icon4");
const icon5 = document.querySelector(".icon5");

faq0.addEventListener("click", faqFuntion0);

function faqFuntion0() {
  faqBox0.classList.toggle("show-faq-bar");
  faqBox0.classList.toggle("faq-bar");
  faqBox0.classList.toggle("d-block");
  icon0.classList.toggle("fa-xmark");
}

faq1.addEventListener("click", faqFuntion1);

function faqFuntion1() {
  faqBox1.classList.toggle("show-faq-bar");
  faqBox1.classList.toggle("faq-bar");
  faqBox1.classList.toggle("d-block");
  icon1.classList.toggle("fa-xmark");
}

faq2.addEventListener("click", faqFuntion2);
function faqFuntion2() {
  faqBox2.classList.toggle("show-faq-bar");
  faqBox2.classList.toggle("faq-bar");
  faqBox2.classList.toggle("d-block");
  icon2.classList.toggle("fa-xmark");
}
faq3.addEventListener("click", faqFuntion3);

function faqFuntion3() {
  faqBox3.classList.toggle("show-faq-bar");
  faqBox3.classList.toggle("faq-bar");
  faqBox3.classList.toggle("d-block");
  icon3.classList.toggle("fa-xmark");
}
faq4.addEventListener("click", faqFuntion4);

function faqFuntion4() {
  faqBox4.classList.toggle("show-faq-bar");
  faqBox4.classList.toggle("faq-bar");
  faqBox4.classList.toggle("d-block");
  icon4.classList.toggle("fa-xmark");
}
faq5.addEventListener("click", faqFuntion5);

function faqFuntion5() {
  faqBox5.classList.toggle("show-faq-bar");
  faqBox5.classList.toggle("faq-bar");
  faqBox5.classList.toggle("d-block");
  icon5.classList.toggle("fa-xmark");
}
