import { createCharacter } from "../../factory/createCharacter";
import { type Fighter } from "../../fighter/types";
import { type CharacterData } from "../../types";
import { type ToadyLevel, type Squire } from "../types";

const createSquire = (
  characterData: CharacterData,
  phrase: string,
  boss: Fighter,
  toadyLevel: ToadyLevel,
): Squire => {
  const squire: Squire = {
    ...createCharacter(characterData, phrase),
    boss,
    toadyLevel,
  };

  return squire;
};

export default createSquire;
