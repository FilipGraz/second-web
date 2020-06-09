console.log("Witam wszytskich future Front-end developerów!");

let naviButton = document.querySelector(".naviBackground");
let backGround = document.querySelector(".navigation");

let photoChange = document.querySelector(".photoChange");
let photo = document.querySelector(".photo");

let changeBackground = document.querySelector(".changeBackground");
let sectionChange = document.querySelector(".bottomSection");

photoChange.addEventListener("click", () => {
  photo.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/EU_on_a_globe.svg/240px-EU_on_a_globe.svg.png";
  photo.innerText = "Zdjecie mapy";
});

naviButton.addEventListener("click", () => {
  if (naviButton.innerText === "Zmień tło na szare") {
    naviButton.innerText = "Tło czarne";
  } else naviButton.innerText = "Zmień tło na szare";
});

naviButton.addEventListener("click", () => {
  backGround.classList.toggle("navigationNew");
});

changeBackground.addEventListener("click", () => {
  if (changeBackground.innerText === "Zmiana tła") {
    changeBackground.innerText = "Jasne tło";
  } else changeBackground.innerText = "Zmiana tła ";
});

changeBackground.addEventListener("click", () => {
  sectionChange.classList.toggle("bottomSection2");
});
