import { type Adviser } from "../../../adviser/Adviser/Adviser";
import type Fighter from "../../../fighter/Fighter/Fighter";
import { type King } from "../../../king/King/King";
import { type Squire } from "../../../squire/Squire/Squire";
import { type CharacterStructure } from "../../../types";

const createCardImage = (
  character: CharacterStructure,
  isLaizyLoading?: boolean,
): HTMLImageElement => {
  const cardImage = document.createElement("img");
  cardImage.classList.add("character__image");

  if (!character.isAlive) {
    cardImage.classList.add("character__image--dead");
  }

  cardImage.src = character.characterData.imageUrl;
  cardImage.alt = `Face of ${character.characterData.name}`;
  cardImage.width = 340;
  cardImage.height = 250;

  if (isLaizyLoading) {
    cardImage.loading = "lazy";
  }

  return cardImage;
};

const createCharacterType = (character: CharacterStructure): HTMLElement => {
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

const createCharacterState = (character: CharacterStructure): HTMLElement => {
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

const createCardInformation = (character: CharacterStructure): HTMLElement => {
  const cardInformation = document.createElement("div");
  cardInformation.classList.add("character__content");

  cardInformation.innerHTML = `
  <h2 class="character__name">${character.characterData.name} ${character.characterData.surname ? character.characterData.surname : ""}</h2> `;

  const characterInformation = document.createElement("div");
  characterInformation.classList.add("character__information");

  characterInformation.innerHTML = `<span class="character__age">Age: ${character.characterData.age} years</span>`;

  cardInformation.appendChild(characterInformation);
  characterInformation.appendChild(createCharacterState(character));

  return cardInformation;
};

const createButton = (text: string): HTMLButtonElement => {
  const button = document.createElement("button");
  button.classList.add("card-hover__button");

  button.textContent = text;

  return button;
};

const cardHover = (character: CharacterStructure): HTMLElement => {
  const cardHover = document.createElement("div");
  cardHover.classList.add("card-hover");

  const characterInfo = document.createElement("div");
  characterInfo.classList.add("card-hover__information");

  const king = character as King;
  const squire = character as Squire;
  const fighter = character as Fighter;
  const adviser = character as Adviser;

  if (king.yearsOfReign) {
    characterInfo.innerHTML = `
    <ul class='card-hover__list'>
      <li>Years of reign: ${king.yearsOfReign} </li>
    </ul>
      `;
  }

  if (squire.toadyLevel) {
    characterInfo.innerHTML = `
    <ul class='card-hover__list'>
      <li>Server to: ${squire.boss.characterData.name}  ${squire.boss.characterData.surname}</li>
    </ul>
    `;
  }

  if (fighter.weapon) {
    characterInfo.innerHTML = `
    <ul class='card-hover__list'>
      <li>Weapon: ${fighter.weapon}</li>
      <li>Dexterity: ${fighter.skillLevel}</li>
    </ul>
    `;
  }

  if (adviser.advised) {
    characterInfo.innerHTML = `
    <ul class='card-hover__list'>
     <li>Advises to: ${adviser.advised.characterData.name}  ${adviser.advised.characterData.surname}</li>
     </ul>
    `;
  }

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("card-hover__buttons");

  buttonContainer.appendChild(createButton("speak"));
  buttonContainer.appendChild(createButton("die"));

  cardHover.appendChild(characterInfo);
  cardHover.appendChild(buttonContainer);

  return cardHover;
};

const createCard = (
  character: CharacterStructure,
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

  card.appendChild(cardHover(character));

  return card;
};

export default createCard;
