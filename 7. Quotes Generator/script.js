const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.quotable.io/random";

// fetching the data from url.
async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  // console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote(api_url);

function share() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ─ by " +
      author.innerHTML,
    "Tweet Window",
    "width=500,height=600"
  );
}
