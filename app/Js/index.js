const btnHamburger = document.querySelector("#btnHamburger");
const nav = document.querySelector("#nav");

btnHamburger.addEventListener("click", function () {
  console.log("Hamburger Clicked");
  if (
    btnHamburger.classList.contains("open") &&
    nav.classList.contains("show")
  ) {
    //To close the Hamburger Menu
    btnHamburger.classList.remove("open");
    nav.classList.remove("show");
  } else {
    //To open the Hamburger Menu
    btnHamburger.classList.add("open");
    nav.classList.add("show");
  }
});
