const cards = document.querySelectorAll(".card");
var display = document.getElementById("lightBoxDisplay");
var nextButton = document.getElementById("next-button");
var prevButton = document.getElementById("prev-button");
var close1 = document.getElementById("close");

function showUp() {
  var details = this.querySelector(".details");
  details.style.bottom = "0";
}

function showDown() {
  var details = this.querySelector(".details");
  details.style.bottom = "-50px";
}

function lightBox() {
  display.style.display = "flex";
}

cards.forEach(function (card) {
  card.addEventListener("mouseover", showUp);
  card.addEventListener("mouseout", showDown);
  card.addEventListener("click", lightBox);
});

let currentImageIndex = 1;

function showImage(index) {
  const imageElement = document.querySelector(`#card${index} img`);
  if (imageElement) {
    const lightboxImage = document.getElementById("lightboxImage");
    lightboxImage.src = imageElement.src;
    document.getElementById("lightBoxDisplay").style.display = "flex";
    currentImageIndex = index;
  }
}

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex > 12) {
    currentImageIndex = 1;
  }
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex--;
  if (currentImageIndex < 1) {
    currentImageIndex = 12;
  }
  showImage(currentImageIndex);
}

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    showImage(index + 1);
  });
});

function turnOff() {
  display.style.display = "none";
}

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);
close1.addEventListener("click", turnOff);
