import { Character } from "../../Character/Character.js";
import type Fighter from "../../fighter/Fighter/Fighter.js";
import { type CharacterData } from "../../types";
import { type ToadyLevel, type SquireStrucutre } from "../types";
export class Squire extends Character implements SquireStrucutre {
  constructor(
    characterData: CharacterData,
    public boss: Fighter,
    public toadyLevel: ToadyLevel,
  ) {
    super(characterData);
  }

  talk(): string {
    return "Soy un loser";
  }
}
