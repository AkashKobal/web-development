const slide = document.querySelectorAll('.slide');
var counter = 0;
//  creating a for loop
slide.forEach((slide, index) => {
    // we used position absolute, so images are stacked one upon one
    // so we have to move them to the left by 100% each time
    slide.style.left = `${index * 100}%`;
})
const slideImage = () => {
    slide.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;

    })

}

const goNext = () => {
    counter++;
    slideImage()
}

const goPrevious = () => {
    counter--;
    slideImage()
}

