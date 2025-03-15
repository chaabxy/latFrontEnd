const divs = document.getElementsByTagName("div");

for (let el of divs) {
  el.addEventListener("click", function () {
    alert("ELEMEN " + el.getAttribute("id").toUpperCase());
  });
}


const div = document.getElementsByTagName("div");
for (let el of div) {
  el.addEventListener(
    "click",
    function () {
      alert("ELEMEN " + el.getAttribute("id").toUpperCase());
    },
    true
  );
}