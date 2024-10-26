import { type Character } from "../../../characters/types";

const createCard = (character: Character): HTMLLIElement => {
  const card = document.createElement("li");
  card.classList.add("card");

  if (character.surname) {
    card.textContent = character.name + " " + character.surname;
  } else {
    card.textContent = character.name;
  }

  return card;
};

export default createCard;
