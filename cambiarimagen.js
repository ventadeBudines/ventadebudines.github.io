const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentIndex = 0;

function showimage(index){
    const slide = document.getElementById("slide");
    slide.src = images[index];
}

function nextimage(){
    currentIndex = (currentIndex+1) % images.length;
    showimage(currentIndex)
}

function previousimage(){
    currentIndex = (currentIndex-1 + images.length) % images.length;
    showimage(currentIndex);
}
document.addEventListener("DOMContentLoaded", () => showimage(currentIndex));