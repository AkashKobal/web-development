let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let winner = document.getElementsByTagName("h1")[0];
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");


if (randomNumber1 > randomNumber2) {
    winner.innerText = "Player 1 won 👑";
    image1.src = "dice" + randomNumber1 + ".png";

}
else if (randomNumber1 == randomNumber2) {
    winner.innerText = "Draw 🙃"
    image1.src = "dice" + randomNumber1 + ".png";
    image2.src = "dice" + randomNumber2 + ".png";
}
else {
    winner.innerText = "Player 2 won 👑"
    image2.src = "dice" + randomNumber2 + ".png";
}