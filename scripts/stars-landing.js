import { landingContent, landingTitle } from "../data/landing.js";

let currentMainPage;

//separate bookmark button text to use js instead of html?
document.querySelectorAll('.js-bookmark-button')
  .forEach((button) => {
    button.addEventListener('click', (event) => {
        currentMainPage = button.id;
        localStorage.setItem("savedMainPage", currentMainPage);
    })
  })

document.querySelector('.js-landing-title')
  .innerHTML = landingTitle;
document.querySelector('.js-landing-description')
  .innerHTML = landingContent;