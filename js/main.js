let image = document.getElementById("image");
let buttonPrev = document.getElementById("button_prev");
let buttonNext = document.getElementById("button_next");
let totalImg = document.getElementById("total_img");
let currentImg = document.getElementById("current_img");
let position = 0;
const urlsImages = [
    "./img/img_logo_html.png",
    "./img/img_logo_css.png",
    "./img/img_logo_js.png",
    "./img/img_logo_python.png"
]
let lengthImages = urlsImages.length;

image.src = urlsImages[position];
currentImg.innerHTML = position + 1;
totalImg.innerHTML = lengthImages;
console.log(lengthImages)

buttonPrev.onclick = () => {
    image.src = urlsImages[(position - 1 + lengthImages) % lengthImages];
    position = (position - 1 + lengthImages) % lengthImages;
    currentImg.innerHTML = position + 1;
}

buttonNext.onclick = () => {
    image.src = urlsImages[(position + 1) % lengthImages];
    position = (position + 1) % lengthImages;
    currentImg.innerHTML = position + 1;
}


// const changeImage = () => {
//     image.src = urlsImages[(position + 1) % lengthImages];
//     position = (position + 1) % lengthImages;
// }

// setInterval(changeImage, 2000);
