import { type CharacterStructure } from "../../types.js";
import { createCardsList } from "./cards/index.js";

const createCardsContainer = (
  characters: CharacterStructure[],
): HTMLElement => {
  const cardsContainer = document.createElement("main");
  cardsContainer.classList.add("card-container");

  cardsContainer.appendChild(createCardsList(characters));

  return cardsContainer;
};

export default createCardsContainer;
