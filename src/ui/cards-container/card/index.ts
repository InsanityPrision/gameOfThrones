import { type Character } from "../../../characters/types";

const createCard = (character: Character): HTMLElement => {
  const card = document.createElement("div");
  card.classList.add("card");

  if (character.surname) {
    card.textContent = character.name + " " + character.surname;
  } else {
    card.textContent = character.name;
  }

  return card;
};

export default createCard;
