import createCardsContainer from "./ui/cards-container/index.js";
import createMainHeader from "./ui/header/index.js";

const mainContainer = document.querySelector(".root");

if (!mainContainer) {
  throw new Error("Root container does not exist");
}

mainContainer.appendChild(createMainHeader());
mainContainer.appendChild(createCardsContainer());
