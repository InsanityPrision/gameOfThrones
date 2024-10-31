import { type Character } from "../../types.js";
import { createCardsList } from "./cards/index.js";

const createCardsContainer = (characters: Character[]): HTMLElement => {
  const cardsContainer = document.createElement("main");
  cardsContainer.classList.add("main-container");

  cardsContainer.appendChild(createCardsList(characters));

  return cardsContainer;
};

export default createCardsContainer;
