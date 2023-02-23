let image = document.getElementById("image");
let buttonPrev = document.getElementById("button_prev");
let buttonNext = document.getElementById("button_next");
let position = 0;
const urlsImages = [
    "./img/img_logo_html.png",
    "./img/img_logo_css.png",
    "./img/img_logo_js.png",
    "./img/img_logo_python.png"
]
let lengthImages = urlsImages.length;

image.src = urlsImages[0];
console.log(lengthImages)

buttonPrev.onclick = () => {
    image.src = urlsImages[(position - 1 + lengthImages) % lengthImages];
    position = (position - 1 + lengthImages) % lengthImages;
}

buttonNext.onclick = () => {
    image.src = urlsImages[(position + 1) % lengthImages];
    position = (position + 1) % lengthImages;
}


// const changeImage = () => {
//     image.src = urlsImages[(position + 1) % lengthImages];
//     position = (position + 1) % lengthImages;
// }

// setInterval(changeImage, 2000);
