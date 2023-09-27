const API_KEY = "bf40eab503a6424f9aa1237c7122be3e";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load' , () => fetchNews('India'));

async function fetchNews (query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');

    cardsContainer.innerHTML = '';

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDatainCard(cardClone, article); 
        cardsContainer.appendChild(cardClone);       
    });
}

function fillDatainCard(cardClone, article) {
    const newImg = cardClone.querySelector("#news-img");
    const newTitle = cardClone.querySelector("#news-title");
    const newSource = cardClone.querySelector("#news-source");
    const newDesc = cardClone.querySelector("#news-desc");

    newImg.src = article.urlToImgae;
    newTitle.innerHTML = article.title;
    newDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleDateString("en-Us" , {
        timeZone: "Asia/Jakarta"
    });

    newSource.innerHTML = `${article.source.name} . ${date}`;

}