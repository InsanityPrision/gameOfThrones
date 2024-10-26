import { type Character } from "../../../characters/types";

const createCard = (character: Character): HTMLLIElement => {
  const card = document.createElement("li");
  card.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card__image");
  cardImage.src = character.imageUrl;
  cardImage.alt = `Cara de ${character.name}`;
  cardImage.width = 100;

  const cardInformation = document.createElement("div");
  cardInformation.classList.add("card__contetn");

  if (character.surname) {
    cardInformation.textContent = character.name + " " + character.surname;
  } else {
    cardInformation.textContent = character.name;
  }

  card.appendChild(cardInformation);

  card.appendChild(cardImage);
  return card;
};

export default createCard;
