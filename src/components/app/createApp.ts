import createCardsContainer from "../../characters/components/cardsContainer";
import { type CharacterStructure } from "../../characters/types";
import createMainHeader from "../header";

const createApp = (characters: CharacterStructure[]): HTMLElement => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  mainContainer.appendChild(createMainHeader());
  mainContainer.appendChild(createCardsContainer(characters));

  return mainContainer;
};

export default createApp;
