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
};

for (const button of buttonNavbar) {
  button.addEventListener("click", openDropDown);
}

const openModal = e => {
  const { modalTrigger } = e.target.dataset;
  const selector = `[data-modal="${modalTrigger}"]`;
  const modal = window.document.querySelector(selector);
  modal.classList.remove("visibility");
  modal.classList.add("modal");
};
// Add event to trigger modals

const modalTriggers = window.document.querySelectorAll("[data-modal-trigger]");

for (const item of modalTriggers) {
  item.addEventListener("click", openModal);
}

/* Exercise
  - add a close modal button
    - once the modal is closed you need to be able to open it again
  - Add another modal with different content and with a close button
  - Add another button to open the about modal ( the first one )
    - Use what we learned about data attributes to change the text of the modal with javascript (hint: element.innerHTML)
  - Bonus: re-implement the gallery using this concepts
*/
