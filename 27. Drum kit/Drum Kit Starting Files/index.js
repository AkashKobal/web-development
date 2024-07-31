// document.querySelector("button").addEventListener("click",handleClicked);
// function handleClicked(){
// alert("I got clicked");
//   }

// dont used paranthesis inside the event listeer because it will call the function immediately after the button is loaded

// document.querySelector("button").addEventListener("click",function(){
//   alert("I got clicked");
// });

/*
document.getElementsByTagName("button")[2].addEventListener("click",function(){
  alert("I got clicked");
});

*/

// applying function to all the buttons, whose class name contain drum
var numbberOfDrums = document.querySelectorAll(".drum").length;
var drumButton = document.querySelectorAll(".drum");
var q = document.getElementById("q");


// for mouse click

for (var i = 0; i < numbberOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("I got clicked");

        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();

        /* 
        this : is a identity of a button that triggered when we click on button
        we can use this to find out which button is clicked and play the sound
    
        */
        //    console.log(this);
        // console.log(this.innerHTML);

        // this.style.color = "yellow";

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

// Using Keyboard Event Listeners to Check for Key Presses
document.addEventListener("keypress", function (event) {

    // event : is a object that contains information about the event that occured
    // example which keyboard key is pressed and information about the key
    // console.log(event);
    // console.log(event.key);
    // alert("Key was pressed");
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "q":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "w":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "e":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "r":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "t":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "y":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "u":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "i":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "o":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "p":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "h":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "z":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "x":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "v":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "n":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "m":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default: alert("wrong key pressed");
    }

}


// adding animation to the buttons
function buttonAnimation(currentKey){
   var activate =  document.querySelector("." + currentKey);
   activate.classList.add("pressed");
// button become normal after 100 milisecond
   setTimeout(function(){
       activate.classList.remove("pressed");
   },100);

}