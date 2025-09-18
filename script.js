// invoke body element to stop scrolling when nav is active
const body = document.body;

// nav button/hamburger menu as the trigger of other elements
const navButton = document.getElementById("nav-button");

// the navigation bar that slides in and out
const navigation = document.querySelector(".navigation");

// each bar of the nav button/hamburger menu
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

// what class should be toggled when nav button is clicked
navButton.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  navigation.classList.toggle("nav-active");
  navigation.classList.toggle("nav-nonactive");

  bar1.classList.toggle("rotate-down");
  bar2.classList.toggle("fade-out");
  bar3.classList.toggle("rotate-up");

  bar1.classList.toggle("bar1-normal");
  bar2.classList.toggle("bar2-normal");
  bar3.classList.toggle("bar3-normal");
});

const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);
navLinks.forEach(link => {
  console.log(link);
});