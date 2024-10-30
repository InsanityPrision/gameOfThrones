import { type Character } from "../../../types.js";
import createCard from "../card/index.js";

export const createCards = (characters: Character[]): HTMLLIElement[] => {
  const cardList: HTMLLIElement[] = [];

  characters.forEach((character) => {
    const card = createCard(character);

    cardList.push(card);
  });

  return cardList;
};

export const createCardsList = (characters: Character[]): HTMLUListElement => {
  const cardsContainer = document.createElement("ul");
  cardsContainer.classList.add("characters");

  const cards = createCards(characters);

  cards.forEach((card) => cardsContainer.appendChild(card));

  return cardsContainer;
};
