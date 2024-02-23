let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");

function search(){
    searchURL = "https://www.google.com/search?q="+searchInput.value;
    window.open(searchURL);
}