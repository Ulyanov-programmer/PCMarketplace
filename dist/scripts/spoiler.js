import SpoilerMenu from "./modules/spoiler.src.js";
new SpoilerMenu({
  btnsSelector: ".shop-menu__spoiler-button",
  contentBlocksSelector: ".shop-menu__spoiler-content",
  maxWorkWidth: 1e4,
  animationDuration: 300,
  buttonActiveClass: "active",
  contentActiveClass: "active"
});
