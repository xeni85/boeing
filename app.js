//carousel controls
const cardsContainer = document.querySelector(".card-container");
const card = document.querySelector(".card");
const prevButton = document.querySelector("#slide-arrow-prev");
const nextButton = document.querySelector("#slide-arrow-next");
const fastStart = document.querySelector(".fast-start");
const fastMid = document.querySelector(".fast-mid");
const fastLast = document.querySelector(".fast-last");

nextButton.addEventListener("click", () => {
  console.log("Clicked next");
  cardsContainer.scrollLeft += 50;
});

prevButton.addEventListener("click", () => {
  cardsContainer.scrollLeft -= 50;
});
