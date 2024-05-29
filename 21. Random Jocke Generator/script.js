const joke = document.getElementById('joke');
const newJokeBtn = document.querySelector('.newJokeBtn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = () => {
    // fetch(url).then(data => data.json()).then(item => console.log(item.joke))
    fetch(url).then(data => data.json()).then(item => {
        joke.innerHTML = item.joke;
    })
}
getJoke();

newJokeBtn.addEventListener('click', getJoke);
