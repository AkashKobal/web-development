const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchBox");
const searchEngineResult = document.getElementById("searchEngineResult");
const showMoreBtn = document.getElementById("showMoreBtn");
const accesskey = "irKB3-p9jf9ev5jWUYV0_iPbYev82Gqj5zdAmwKtRL8";

let keyword ="";
let page = 1;
async function searchImages(){
    keyword = searchBox.value;
    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`);
    const data = await  response.json();
    console.log(data)
    const results = data.results;
    if(page === 1){
        searchEngineResult.innerHTML ="";
    }
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.urls.html;
        imageLink.target= "_blank";
        imageLink.appendChild(image);
        searchEngineResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
});
showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
});