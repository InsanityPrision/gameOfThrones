import { Character } from "../../Character/Character.js";
import { type CharacterData } from "../../types";
import { type AdviserStructure } from "../types";

export class Adviser extends Character implements AdviserStructure {
  constructor(
    public advised: Character,
    characterData: CharacterData,
  ) {
    super(characterData);
  }

  talk(): string {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
