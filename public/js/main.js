const navbar = window.document.querySelector("nav.navbar");
const headerLogo = window.document.querySelector(".header_logo");
const jumboTron = window.document.querySelector(".jumbotron");

/** ~~~~~~~~~~~~~~~~~~~~~~~ MODIFYING THE CONTENT ~~~~~~~~~~~~~~~~~~~~~~~ **/
const modifyJumboTronText = () => {
  const heading = document.createElement("h1");
  heading.innerHTML = "I am the new JUMBOTRON";
  //  This is very powerfull because is 'nukes' everything inside
  jumboTron.innerHTML = "";
  jumboTron.appendChild(heading);
};

//  this is an arrow function to handle the click event on the headerLogo
const headerEventClickHandler = (event) => {
  event.preventDefault();

  /** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODIFYING CLASSES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ **/
  navbar.classList.toggle("red-navbar");

  //we can call a function like this
  modifyJumboTronText();
};

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ADDING EVENTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ **/
headerLogo.addEventListener("click", headerEventClickHandler);

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ EXERCISES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ **/
/** ~~~~~~~~~~~~~~~~~~~~~~~ DROPDOWN ~~~~~~~~~~~~~~~~~~~~~~~ **/
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

/** ~~~~~~~~~~~~~~~~~~~~~~~ MODAL ~~~~~~~~~~~~~~~~~~~~~~~ **/
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

// Change this to 'change the html' WHen the popup is opened -> When the user click on the second about the text is already the 'new' one
/** ~~~~~~~~~~~~~~~~~~~~~~~ CHANGING THE HTML ~~~~~~~~~~~~~~~~~~~~~~~ **/
const modifyModal = (event) => {
  const aboutContent = window.document.querySelector(
    '[data-modal="about"] .modal-content'
  );
  const newElement = document.createElement("p");

  if (event.target.classList == "navbar_title") {
    newElement.innerHTML = "My awesome popup";
  } else {
    newElement.innerHTML = "You! Yes you! You're Awesome :D!";
  }

  aboutContent.innerHTML = "";
  aboutContent.appendChild(newElement);
};

const aboutModal = window.document.querySelectorAll(
  '[data-modal-trigger="about"]'
);

for (const a of aboutModal) {
  a.addEventListener("click", modifyModal);
}

/*  Stuff to do:
- Bonus: re-implement the gallery using this concepts
- Nico will create an API ((*cheer cheer*))
- Run audit in chrome and try to understand it and address it ((adding alt to pictures and meta description.))
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
-- take care that index can go 'outside' of the array, you need to solve this( if you have 3 img and index start from 0 and the user click left, index should be 2)
-- after updating index change visibility of the img
--- Bonus points if you can add a css transition =>  https://css-tricks.com/almanac/properties/t/transition/
*/

/** ~~~~~~~~~~~~~~~~~~~~~~~ SLIDESHOW GALLERY ~~~~~~~~~~~~~~~~~~~~~~~ **/
const listImg = window.document.querySelectorAll(".gallery_image");
const length = listImg.length;

let currentImg = 0;

listImg[currentImg].classList.remove("hidden");

const changeImg = (event) => {
  listImg[currentImg].classList.toggle("hidden");

  if (event.target.classList == "slideshow next") {
    currentImg = currentImg + 1;
    if (currentImg > listImg.length - 1) {
      currentImg = 0;
    }
  } else {
    currentImg = currentImg - 1;
    if (currentImg < 0) {
      currentImg = listImg.length - 1;
    }
  }
  listImg[currentImg].classList.remove("hidden");
};

const slideshow = window.document.querySelectorAll(".slideshow");
for (const slide of slideshow) {
  slide.addEventListener("click", () => changeImg("right"));
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EVALUATION

// const changeImg2 = (isNext) => {
//   listImg[currentImg].classList.toggle("hidden");

//   if (isNext) {
//     currentImg = currentImg + 1;
//     if (currentImg > listImg.length - 1) {
//       currentImg = 0;
//     }
//   } else {
//     currentImg = currentImg - 1;
//     if (currentImg < 0) {
//       currentImg = listImg.length - 1;
//     }
//   }
//   listImg[currentImg].classList.remove("hidden");
// };

// const changeImg3 = (isRight) => {
//   changeImg2(isRight);
// };

// const leftArrow = window.document.querySelector(".gallery .left");
// leftArrow.addEventListener("click", () => changeImg2(false));
// const rightArrow = window.document.querySelector(".gallery .right");
// rightArrow.addEventListener("click", () => changeImg2(true));
////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** ~~~~~~~~~~~~~~~~~~~~~~~ FORM SENDING AND DATAS ~~~~~~~~~~~~~~~~~~~~~~~ **/
//  Grabbing data from the form
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// let's use lowercase ID
const form = window.document.querySelector("#Appointment form");
const confirmation = form.querySelector("p");
console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const confirmed = confirm("Are you sure that you want to submit?");
  if (confirmed) {
    const formData = new FormData(form);
    // let's not mix var with const and let, in general never use var
    const dataToSend = {};
    for (var pair of formData.entries()) {
      dataToSend[pair[0]] = pair[1];
    }
    postData("/api/appointment/", dataToSend).then((data) => {
      console.log(data); // JSON data parsed by `response.json()` call
      confirmation.innerHTML =
        "we received " + data.length + " appointment(s)!";
    });
  } else {
    alert("the form has not been submitted");
  }
});

/*  Stuff to do:
 - Extract the data from `formData` and send it correctly to the API
      ==> (( The datas are in the console everytime you click on send. i think i'll ask you again about how to do that. ))
 - Read the  API response and count how many appointments are in the system => Add this to the page under or above the form  HINT: use innerHTML
      ==> (( adding a <p> tag and then changin the html of it! ))
 - Implement a confirmation dialog before sending the form => HINT search for `javascript confirmation alert`
      ==> ((added an alert before the form. Hesitated with the confirm that would change the text and the code. ))
 - Bonus: Add a dialog with a login form.( no need to connect it to the API we will do this together later)
      ==> (( adding a dialog under the modal. Using the code written to avoid to repeat it. ))
 - Bonus: play more with css transition and experiment with all the property that you can modify.

 Notes: from now on you need to pay attention to be DRY => Do not Repeat Yourself
*/

/* Notes
1. choose a design
2. start a new github repository
3. customize the design and create it with vue
4. publish it
5. add stuff to it
*/
