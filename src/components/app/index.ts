import createCardsContainer from "../../characters/components/cards-container/index.js";
import { characters } from "../../characters/data/data.js";
import createMainHeader from "../header/index.js";

const mainContainer = document.querySelector(".root");

if (!mainContainer) {
  throw new Error("Root container does not exist");
}

mainContainer.appendChild(createMainHeader());
mainContainer.appendChild(createCardsContainer(characters));
