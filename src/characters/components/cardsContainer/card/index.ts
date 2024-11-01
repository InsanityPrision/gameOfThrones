import { type Character } from "../../../types";

const createCardImage = (
  character: Character,
  isLaizyLoading?: boolean,
): HTMLImageElement => {
  const cardImage = document.createElement("img");
  cardImage.classList.add("character__image");

  if (!character.isAlive) {
    cardImage.classList.add("character__image--dead");
  }

  cardImage.src = character.imageUrl;
  cardImage.alt = `Face of ${character.name}`;
  cardImage.width = 340;
  cardImage.height = 250;

  if (isLaizyLoading) {
    cardImage.loading = "lazy";
  }

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

  characterInfo.innerHTML = `
    <span class='card__state'>
      State: 
      <img src=icons/${character.isAlive ? "up.svg" : "down.svg"} alt=${character.isAlive ? "alive" : "dead"} width='16' height='16'>
    </span>
    `;

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

const createCard = (
  character: Character,
  isLazyLoading?: boolean,
): HTMLLIElement => {
  const card = document.createElement("li");

  const characterCard = document.createElement("article");
  characterCard.classList.add("character");

  const characterImage = createCardImage(character, isLazyLoading);
  const characterInformation = createCardInformation(character);

  characterCard.appendChild(characterImage);
  characterCard.appendChild(characterInformation);

  card.appendChild(characterCard);

  return card;
};

export default createCard;
