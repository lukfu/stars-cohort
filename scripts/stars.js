const pageOptions = [{
    id: "overview",
    title: "Overview"
  }, 
  {
    id: "about-us",
    title: "About Us"
  }, 
  {
    id: "about-the-research",
    title: "About the Research"
  },
  {
    id: "publications",
    title: "Publications"
  }
]

let currentMainPage;

function getClickID(clicked) {
  currentMainPage = clicked;
  console.log('click: ' + currentMainPage)
  pageDisplay(currentMainPage)
};

function pageDisplay(currentMainPage) {
  let pageTitleHTML = `test`;
  let pageContentHTML = ``;

  pageOptions.forEach((pageOptions) => {
    //console.log(pageOptions.id)
    //console.log(currentMainPage)
    //console.log(pageOptions.id === currentMainPage)
    if (pageOptions.id === currentMainPage) {
      pageTitleHTML = pageOptions.title;
    }
  })

  document.querySelector('.js-main-title')
    .innerHTML = pageTitleHTML;
}
