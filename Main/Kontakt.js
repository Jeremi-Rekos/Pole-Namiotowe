const numImages = 12;

let currentImageIndex = 1;
const imageElement = document.getElementById("image");

function autoSlide() {
  currentImageIndex = (currentImageIndex % numImages) + 1;
  showImage(currentImageIndex);
}

const slideInterval = setInterval(autoSlide, 5000);

function showImage(index) {
  const newImage = new Image();
  newImage.src = `zdj/img${index}.jpg`;

  newImage.onload = () => {
    imageElement.style.transition = "opacity 0.5s";
    imageElement.style.opacity = 0;

    setTimeout(() => {
      imageElement.src = newImage.src;
    }, 500);

    setTimeout(() => {
      imageElement.style.opacity = 1;
    }, 500);
  };
}
showImage(currentImageIndex);
console.log(imageElement);
