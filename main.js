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
const headerEventClickHandler = (event) => {
  event.preventDefault();

  /** ~~~~~~~~~~~~~~~~~~~~~~~ MODIFYING CLASSES ~~~~~~~~~~~~~~~~~~~~~~~ **/
  navbar.classList.toggle("red-navbar");

  //we can call a function like this
  modifyJumboTronText();
};

/** ~~~~~~~~~~~~~~~~~~~~~~~ ADDING EVENTS ~~~~~~~~~~~~~~~~~~~~~~~ **/
headerLogo.addEventListener("click", headerEventClickHandler);

/** ~~~~~~~~~~~~~~~~~~~~~~~ EXERCISES ~~~~~~~~~~~~~~~~~~~~~~~ **/
/** ~~~~~~~~~~~ DROPDOWN ~~~~~~~~~~~ **/
/* Use querySelector and click events and classList to re-implement the dropdowns */
const buttonNavbar = window.document.querySelectorAll("nav .dropdown");

const openDropDown = (event) => {
  const div = event.target.closest(".dropdown");
  const dropDown = div.querySelector(".visibility");
  dropDown.classList.toggle("dropdown-content");
};

for (const button of buttonNavbar) {
  button.addEventListener("click", openDropDown);
}

/** ~~~~~~~~~~~ MODAL ~~~~~~~~~~~ **/
/** ~~~~~ TRIGGER OF THE MODALS ~~~~~ **/
const openModal = (e) => {
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
const closeModal = (event) => {
  const modal = event.target.closest(".modal");
  modal.classList.remove("modal");
  modal.classList.add("visibility");
};

const closeButton = window.document.querySelectorAll(".modal-button");

for (const item of closeButton) {
  item.addEventListener("click", closeModal);
}

// Change this to 'change the html' WHen the popup is opened -> When the user click ont he second about the text is already the 'new' one
/** ~~~~~~~~~~~ CHANGING FIRST MODAL ~~~~~~~~~~~ **/
const modifyModal = (event) => {
  const aboutContent = event.target.querySelector(".modal-content");
  const newElement = document.createElement("p");
  newElement.innerHTML = "You! Yes you! You're Awesome :D!";
  aboutContent.innerHTML = "";
  aboutContent.appendChild(newElement);
};

const aboutModal = window.document.querySelector('[data-modal="about"]');
aboutModal.addEventListener("click", modifyModal);

/*  Stuff to do:
- Bonus: re-implement the gallery using this concepts
- Nico will create an API
- Run audit in chrome and try to understand it and address it
- Add a doggy daycare video from youtube to the page. ((doen with an iframe coming from youtube))
- Make the phone and email links open the email and the phone for real. ((done with callto: and tel: property))


All of the above are: research and ask questions to Nico.


TIPS FOR GALLERY:
- Add all the imgs to the html, all hidden
- When the script starts read all the img of the gallery => put them in an Array with querySelectorAll
- When the script starts remove the hidden class from the first pic in the Array
- When user click  right arrow => go to your array and move to the right of the visible pic
-- Keep and index ( that starts from zero ) for what picture you are at
-- right means => index +1
-- left means => index -1
-- take care that index can go 'outside' of the array, you need to solve this( if you have 3 img and index start from 0 and the user click left, index should be 3)
-- after updating index change visibility of the img
--- Bonus points if you can add a css transition =>  https://css-tricks.com/almanac/properties/t/transition/
*/
