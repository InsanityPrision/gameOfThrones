import { createCharacter } from "../../factory/createCharacter.js";
import { type Fighter } from "../../fighter/types";
import { type King } from "../../king/types";
import { type Squire } from "../../squire/types";
import { type CharacterData } from "../../types";
import { type Adviser } from "../types";

export const createAdviser = (
  characterData: CharacterData,
  phrase: string,
  advised: Fighter | Adviser | King | Squire,
): Adviser => {
  const adviser: Adviser = {
    ...createCharacter(characterData, phrase),
    advised,
  };

  return adviser;
};
