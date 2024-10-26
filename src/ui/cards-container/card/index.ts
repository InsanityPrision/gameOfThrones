import { type Character } from "../../../characters/types";

const createCardImage = (character: Character): HTMLImageElement => {
  const cardImage = document.createElement("img");
  cardImage.classList.add("card__image");
  cardImage.src = character.imageUrl;
  cardImage.alt = `Face of ${character.name}`;
  cardImage.width = 100;

  return cardImage;
};

const createCardInformation = (character: Character): HTMLElement => {
  const cardInformation = document.createElement("div");
  cardInformation.classList.add("card__contetn");

  const characterName = document.createElement("div");

  if (character.surname) {
    characterName.textContent = character.name + " " + character.surname;
  } else {
    characterName.textContent = character.name;
  }

  cardInformation.innerHTML = `<span class='card__age'>Age: ${character.age} years</span>`;

  cardInformation.appendChild(characterName);

  return cardInformation;
};

const createCard = (character: Character): HTMLLIElement => {
  const card = document.createElement("li");
  card.classList.add("card");

  const characterImage = createCardImage(character);
  const characterInformation = createCardInformation(character);

  card.appendChild(characterInformation);

  card.appendChild(characterImage);
  return card;
};

export default createCard;
