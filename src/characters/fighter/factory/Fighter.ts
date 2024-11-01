import { Character } from "../../factory/Character.js";
import type { CharacterData } from "../../types.js";
import type { FighterStructure, SkillLevel } from "../types.js";

class Fighter extends Character implements FighterStructure {
  constructor(
    characterData: CharacterData,
    public weapon: string,
    public skillLevel: SkillLevel,
  ) {
    super(characterData);
  }

  talk(): string {
    return "Primero pego y luego pregunto";
  }
}

export default Fighter;
