import { Character } from "../../Character/Character.js";
import { type FighterStructure } from "../../fighter/types";
import { type CharacterData } from "../../types";
import { type ToadyLevel, type SquireStrucutre } from "../types";
export class Squire extends Character implements SquireStrucutre {
  constructor(
    characterData: CharacterData,
    public boss: FighterStructure,
    public toadyLevel: ToadyLevel,
  ) {
    super(characterData);
  }

  talk(): string {
    return "Soy un loser";
  }
}
