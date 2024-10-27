import { type Character } from "../../../characters/types";

const createCardImage = (character: Character): HTMLImageElement => {
  const cardImage = document.createElement("img");
  cardImage.classList.add("card__image");

  if (!character.isAlive) {
    cardImage.classList.add("card__image--dead");
  }

  cardImage.src = character.imageUrl;
  cardImage.alt = `Face of ${character.name}`;
  cardImage.width = 100;

  return cardImage;
};

const createCharacterState = (character: Character): HTMLElement => {
  const characterInfo = document.createElement("div");
  characterInfo.classList.add("card__information");

  if (character.isAlive) {
    characterInfo.innerHTML =
      "<span class='card__state'>State: <img class='state--alive' src='icons/up.svg' alt='alive' width='12' height='12'></span>";
  }

  if (!character.isAlive) {
    characterInfo.innerHTML =
      "<span class='card__state'>State: <img class='state--dead' src='icons/down.svg' alt='alive' width='12' height='12'>";
  }

  const characterType = document.createElement("span");
  characterType.classList.add("character-type");

  characterType.innerHTML = "<span class='character-type'>👑</span>";

  characterInfo.appendChild(characterType);

  return characterInfo;
};

const createCardInformation = (character: Character): HTMLElement => {
  const characterState = createCharacterState(character);
  const cardInformation = document.createElement("div");
  cardInformation.classList.add("card__contetn");

  const characterName = document.createElement("div");

  if (character.surname) {
    characterName.textContent = character.name + " " + character.surname;
  } else {
    characterName.textContent = character.name;
  }

  const characterAge = document.createElement("span");
  characterAge.classList.add("card__age");
  characterAge.textContent = `Age: ${character.age} years`;

  cardInformation.appendChild(characterName);
  cardInformation.appendChild(characterAge);
  cardInformation.appendChild(characterState);

  return cardInformation;
};

const createCard = (character: Character): HTMLLIElement => {
  const card = document.createElement("li");
  card.classList.add("card");

  const characterImage = createCardImage(character);
  const characterInformation = createCardInformation(character);

  card.appendChild(characterImage);
  card.appendChild(characterInformation);

  return card;
};

export default createCard;
