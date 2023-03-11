let hiddenHeadphonesClass = "product-card-mini_hidden";
let showMoreButtonClass = "headphones__show-more-btn";
let hiddenHeadphones = document.querySelectorAll("." + hiddenHeadphonesClass);
let showMoreButton = document.querySelector("." + showMoreButtonClass);
showMoreButton.addEventListener("click", () => {
  for (let hiddenHeadphone of hiddenHeadphones) {
    hiddenHeadphone.classList.remove(`${hiddenHeadphonesClass}`);
  }
  showMoreButton.classList.add(showMoreButtonClass + "_hidden");
});
let selectedGameClass = "_element-with-accent-point";
let games = document.querySelectorAll(".pick-up__game");
let activeGames = [];
let gamesCounter = document.querySelector("#counter-number");
let gamesCounterNumber = 0;
for (let gameBlock of games) {
  gameBlock.addEventListener("click", () => {
    gameBlock.classList.toggle(selectedGameClass);
    if (gameBlock.classList.contains(selectedGameClass)) {
      gamesCounterNumber += 1;
    } else {
      gamesCounterNumber -= 1;
    }
    gamesCounter.innerHTML = gamesCounterNumber.toString();
  });
}
