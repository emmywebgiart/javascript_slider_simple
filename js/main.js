let image = document.getElementById("image");
let containerSlider = document.querySelector(".container_slider");
let buttonPrev = document.getElementById("button_prev");
let buttonNext = document.getElementById("button_next");
let totalImg = document.getElementById("total_img");
let currentImg = document.getElementById("current_img");
const images = [
    {
        id: 1,
        url: "./img/img_logo_html.png",
        color: "#ff552c"
    },
    {
        id: 2,
        url: "./img/img_logo_css.png",
        color: "#0065a5"
    },
    {
        id: 3,
        url: "./img/img_logo_js.png",
        color: "#eab500"
    },
    {
        id: 4,
        url: "./img/img_logo_python.png",
        color: "#006da2"
    }
]
let lengthImages = images.length;
let position = 0;

containerSlider.style.setProperty("--bg--container", images[position].color)
image.src = images[position].url;
currentImg.innerHTML = position + 1;
totalImg.innerHTML = lengthImages;

const changeImage = () => {
    image.src = images[position].url;
    containerSlider.style.setProperty("--bg--container", images[position].color)
    currentImg.innerHTML = position + 1;
}

buttonPrev.onclick = () => {
    position = (position - 1 + lengthImages) % lengthImages;
    changeImage()
}

buttonNext.onclick = () => {
    position = (position + 1) % lengthImages;
    changeImage()
}
