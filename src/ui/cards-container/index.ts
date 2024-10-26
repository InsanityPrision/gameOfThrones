import { createCardsList } from "./cards/index.js";

const createCardsContainer = (): HTMLElement => {
  const cardsContainer = document.createElement("main");
  cardsContainer.classList.add("main-container");

  cardsContainer.appendChild(createCardsList());

  return cardsContainer;
};

export default createCardsContainer;
