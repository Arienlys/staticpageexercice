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




/** ~~~~~~~~~~~~~~~~~~~~~~~ EXERCICES ~~~~~~~~~~~~~~~~~~~~~~~ **/
/** ~~~~~~~~~~~ DROPDOWN ~~~~~~~~~~~ **/
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

/** ~~~~~~~~~~~ MODAL ~~~~~~~~~~~ **/
/** ~~~~~ TRIGGER OF THE MODALS ~~~~~ **/
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
  - add a close modal button ((done by adding a button with the text "X", adding of a new class to put it in place))
    - once the modal is closed you need to be able to open it again ((done with the closeModal function :D))
  - Add another modal with different content and with a close button ((done on the "special" a, following the same model (￣▽￣)b))
  - Add another button to open the about modal ( the first one )  ((done by adding "data-modal-trigger" to the about <a> at the end of the page))
    - Use what we learned about data attributes to change the text of the modal with javascript (hint: element.innerHTML) ((DONE!!! using the jumbotron example!))
  - Bonus: re-implement the gallery using this concepts
*/

/** ~~~~~~~~~~~ CLOSING MODAL ~~~~~~~~~~~ **/
const closeModal = event => {
  const modal = event.target.closest(".modal");
  modal.classList.remove("modal");
  modal.classList.add("visibility");
}

const closeButton = window.document.querySelectorAll(".modal-button");

for (const item of closeButton) {
  item.addEventListener("click", closeModal);
}

/** ~~~~~~~~~~~ CHANGING FIRST MODAL ~~~~~~~~~~~ **/
const modifyModal = event => {
  const aboutContent = event.target.querySelector(".modal-content");
  const newElement = document.createElement("p");
  newElement.innerHTML = "You! Yes you! You're Awesome :D!";
  aboutContent.innerHTML = "";
  aboutContent.appendChild(newElement);
};

const aboutModal = window.document.querySelector('[data-modal="about"]');
aboutModal.addEventListener("click", modifyModal);