import { jaime } from "../../characters/fighter/data/data.js";
import createCard from "./card/index.js";

const createCardsContainer = (): HTMLElement => {
  const cardsContainer = document.createElement("main");
  cardsContainer.classList.add("cards");

  cardsContainer.appendChild(createCard(jaime));

  return cardsContainer;
};

export default createCardsContainer;
