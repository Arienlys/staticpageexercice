const navbar = window.document.querySelector("nav.navbar");
const headerLogo = window.document.querySelector(".header_logo");
const jumboTron = window.document.querySelector(".jumbotron");

/** ~~~~~~~~~~~~~~~~~~~~~~~ MODIFYING THE CONTENT ~~~~~~~~~~~~~~~~~~~~~~~ **/
const modifyJumboTronText = () => {
  const heading = document.createElement("h1");
  heading.innerHTML = "I am the new JUMBOTRON";
  //  ThiS is very powerfull because is 'nukes' everything inside
  jumboTron.innerHTML = "";
  jumboTron.appendChild(heading);
};

//  this is an arrow function to handle the click event on the headerLogo
const headerEventClickHandler = event => {
  event.preventDefault();


  /** ~~~~~~~~~~~~~~~~~~~~~~~ MODIFYING CLASSES ~~~~~~~~~~~~~~~~~~~~~~~ **/
  navbar.classList.toggle("red-navbar");

  //we can call a function like this
  modifyJumboTronText();
};

/** ~~~~~~~~~~~~~~~~~~~~~~~ ADDING EVENTS ~~~~~~~~~~~~~~~~~~~~~~~ **/
headerLogo.addEventListener("click", headerEventClickHandler);

// Exercise
/* Use querySelector and click events and classList to re-implement the dropdowns */
const buttonNavbar = window.document.querySelectorAll("nav .dropdown");

const openDropDown = event => {
  const div = event.target.closest(".dropdown");
  const dropDown = div.querySelector(".visibility");
  dropDown.classList.toggle("dropdown-content");
}

for (const button of buttonNavbar) {
  button.addEventListener("click", openDropDown);
}