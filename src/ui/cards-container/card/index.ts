import { type Character } from "../../../characters/types";

const createCardImage = (character: Character): HTMLImageElement => {
  const cardImage = document.createElement("img");
  cardImage.classList.add("character__image");

  if (!character.isAlive) {
    cardImage.classList.add("character__image--dead");
  }

  cardImage.src = character.imageUrl;
  cardImage.alt = `Face of ${character.name}`;
  cardImage.width = 280;
  cardImage.height = 220;
  cardImage.loading = "eager";

  return cardImage;
};

const createCharacterType = (character: Character): HTMLElement => {
  const characterType = document.createElement("span");
  characterType.classList.add("character-type");

  const kingPhrase = "Vais a morir todos";
  const fighterPhrase = "Primero pego y luego pregunto";
  const adviserPhrase = "No sé por qué, pero creo que voy a morir pronto";
  const squirePhrase = "Soy un loser";

  if (character.talk() === kingPhrase) {
    characterType.textContent = "👑";
  }

  if (character.talk() === fighterPhrase) {
    characterType.textContent = "🗡";
  }

  if (character.talk() === adviserPhrase) {
    characterType.textContent = "🎓";
  }

  if (character.talk() === squirePhrase) {
    characterType.textContent = "🛡️";
  }

  return characterType;
};

const createCharacterState = (character: Character): HTMLElement => {
  const characterInfo = document.createElement("div");
  characterInfo.classList.add("character__state");

  if (character.isAlive) {
    characterInfo.innerHTML =
      "<span class='card__state'>State: <img class='state--alive' src='icons/up.svg' alt='alive' width='12' height='12'></span>";
  }

  if (!character.isAlive) {
    characterInfo.innerHTML =
      "<span class='card__state'>State: <img class='state--dead' src='icons/down.svg' alt='dead' width='12' height='12'>></span>";
  }

  characterInfo.appendChild(createCharacterType(character));

  return characterInfo;
};

const createCardInformation = (character: Character): HTMLElement => {
  const cardInformation = document.createElement("div");
  cardInformation.classList.add("character__content");

  cardInformation.innerHTML = `
  <h2 class="character__name">${character.name} ${character.surname ? character.surname : ""}</h2> `;

  const characterInformation = document.createElement("div");
  characterInformation.classList.add("character__information");

  characterInformation.innerHTML = `<span class="character__age">Age: ${character.age} years</span>`;

  cardInformation.appendChild(characterInformation);
  characterInformation.appendChild(createCharacterState(character));

  return cardInformation;
};

const createCard = (character: Character): HTMLLIElement => {
  const card = document.createElement("li");
  card.classList.add("character");

  const characterImage = createCardImage(character);
  const characterInformation = createCardInformation(character);

  card.appendChild(characterImage);
  card.appendChild(characterInformation);

  return card;
};

export default createCard;
