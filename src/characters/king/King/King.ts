import { Character } from "../../Character/Character.js";
import { type CharacterData } from "../../types.js";
import { type KingStructure } from "../types.js";

export class King extends Character implements KingStructure {
  constructor(
    characterData: CharacterData,
    public yearsOfReign: number,
  ) {
    super(characterData);
  }

  talk(): string {
    return "Vais a morir todos";
  }
}
