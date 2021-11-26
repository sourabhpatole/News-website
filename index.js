console.log("This is my index js file");

// e42a8f3e91ec41f09aa3cc1ee18b9626  Api key

let NewsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=e42a8f3e91ec41f09aa3cc1ee18b9626",
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newshtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="card">
      <div class="card-header" id="heading${index}">
          <h2 class="mb-0">
          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
              aria-expanded="false" aria-controls="collapse${index}">
             <b>Breaking News ${index + 1}:</b> ${element["title"]}
          </button>
          </h2>
      </div>

      <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
          <div class="card-body"> ${element["description"]}. <a href="${
        element["url"]
      }" target="_blank" >Read more here</a>  </div>
      </div>
  </div>`;
      newshtml += news;
    });
    NewsAccordion.innerHTML = newshtml;
  } else {
    console.log("Some error Occured");
  }
};
xhr.send();
