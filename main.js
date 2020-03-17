const navbar = window.document.querySelector("nav.navbar");
const headerLogo = window.document.querySelector(".header_logo");
const jumboTron = window.document.querySelector(".jumbotron");

// MODIFY THE CONTENT
const modifyJumboTronText = () => {
  const heading = document.createElement("h1");
  heading.innerHTML = "I am the new JUMBOTRON";
  //  Thi is very powerfull because is 'nukes' everything inside
  jumboTron.innerHTML = "";
  jumboTron.appendChild(heading);
};

//  this is an arrow function to handle the click event on the headerLogo
const headerEventClickHandler = event => {
  event.preventDefault();
  // MODIFY CLASSES
  navbar.classList.toggle("red-navbar");

  //we can call a function like this
  modifyJumboTronText();
};

//  ADD EVENTS
headerLogo.addEventListener("click", headerEventClickHandler);

// Exercise

/*
Use querySelector and click events and classList to re-implement the dropdowns
*/
