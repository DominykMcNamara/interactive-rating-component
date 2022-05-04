const ratingBtn = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const ratingView = document.querySelector("#rating-section");
const thankYouView = document.querySelector("#thank-you-section");
const thankYouField = document.querySelector(".selection-message");
const selectionMessage = thankYouField.querySelector("p");

let rating = 0;

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    rating = btn.getAttribute("value");
  });
});

submitBtn.addEventListener("click", (e) => {
  if (rating === 0) {
    return;
  }
  e.preventDefault();
  ratingView.classList.add("hidden");
  thankYouView.classList.remove("hidden");
  selectionMessage.textContent = `You selected ${rating} out of 5`;
});
