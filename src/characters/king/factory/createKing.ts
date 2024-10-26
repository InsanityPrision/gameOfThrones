import { createCharacter } from "../../factory/createCharacter.js";
import { type CharacterData } from "../../types";
import { type King } from "../types";

const createKing = (
  characterData: CharacterData,
  phrase: string,
  yearsOfReign: number,
) => {
  const king: King = {
    ...createCharacter(characterData, phrase),
    yearsOfReign,
  };

  return king;
};

export default createKing;
