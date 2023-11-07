var cards = document.querySelectorAll(".card");
var display = document.getElementById("lightBoxDisplay");

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
