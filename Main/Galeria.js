const test1 = document.getElementById("card1");
var test2 = document.getElementById("details1");

test1.addEventListener("mouseover", test3);
test1.addEventListener("mouseout", test4);

function test3() {
  test2.style.bottom = "0";
}
function test4() {
  test2.style.bottom = "-50px";
}

var item = document.querySelectorAll("card");
var name = item + [i];
for (var i = 0; i < item.length; i++) {
  function test3() {
    name.style.bottom = "0";
  }
  function test4() {
    name.style.bottom = "-50px";
  }
}
