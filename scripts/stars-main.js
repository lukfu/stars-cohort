import { overviewTitle, overviewContent } from "../data/overview.js";
import { aboutUsTitle, aboutUsContent } from "../data/about-us.js";
import { researchTitle, researchContent } from "../data/about-the-research.js";
import { publicationsTitle, publicationsContent } from "../data/publications.js";

const pageOptions = [{
    id: "overview",
    title: overviewTitle,
    content: overviewContent
  }, 
  {
    id: "about-us",
    title: aboutUsTitle,
    content:aboutUsContent
  }, 
  {
    id: "about-the-research",
    title: researchTitle,
    content: researchContent
  },
  {
    id: "publications",
    title: publicationsTitle,
    content: publicationsContent
  }
]

let currentMainPage;

document.querySelectorAll('.js-bookmark-button')
  .forEach((button) => {
    button.addEventListener('click', (event) => {
        currentMainPage = button.id;
        localStorage.setItem("savedMainPage", currentMainPage);
        //console.log(localStorage.getItem("savedMainPage"));
        //console.log('click: ' + currentMainPage);
        pageDisplay(currentMainPage);
    })
  })

pageDisplay(localStorage.getItem("savedMainPage"));

/*
function getClickID(clicked) {
  currentMainPage = clicked;
  console.log('click: ' + currentMainPage)
  pageDisplay(currentMainPage)
};
*/

function pageDisplay(currentMainPage) {
  let pageTitleHTML = ``;
  let pageContentHTML = ``;

  pageOptions.forEach((pageOptions) => {
    //console.log(pageOptions.id)
    //console.log(currentMainPage)
    //console.log(pageOptions.id === currentMainPage)
    if (pageOptions.id === currentMainPage) {
      pageTitleHTML = pageOptions.title;
      pageContentHTML = pageOptions.content;
    }
  })

  document.querySelector('.js-main-title')
    .innerHTML = pageTitleHTML;
  document.querySelector('.js-main-description')
    .innerHTML = pageContentHTML;
}