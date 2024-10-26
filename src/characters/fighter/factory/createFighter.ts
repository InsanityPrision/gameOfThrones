import { createCharacter } from "../../factory/createCharacter.js";
import type { CharacterData } from "../../types";
import type { Fighter, SkillLevel } from "../types";

const createFighter = (
  characterData: CharacterData,
  skillLevel: SkillLevel,
  weapon: string,
  phrase: string,
): Fighter => {
  const fighter: Fighter = {
    ...createCharacter(characterData, phrase),
    skillLevel,
    weapon,
  };

  return fighter;
};

export default createFighter;
