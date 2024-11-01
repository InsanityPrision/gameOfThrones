import createCardsContainer from "../../characters/components/cardsContainer/index.js";
import { type Character } from "../../characters/types";
import createMainHeader from "../header/index.js";

const createApp = (characters: Character[]): HTMLElement => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  mainContainer.appendChild(createMainHeader());
  mainContainer.appendChild(createCardsContainer(characters));

  return mainContainer;
};

export default createApp;
