import type { CharacterData } from "../../types";
import type { Fighter, SkillLevel } from "../types";

const createFighter = (
  characterData: CharacterData,
  skillLevel: SkillLevel,
  weapon: string,
): Fighter => {
  const fighter: Fighter = {
    name: characterData.name,
    surname: characterData.surname,
    age: characterData.age,
    skillLevel,
    weapon,
    isAlive: true,
    phrase: "Primero pego y luego pregunto",
    die() {
      this.isAlive = false;
    },
    talk(this: Fighter) {
      return this.phrase;
    },
  };

  return fighter;
};

export default createFighter;
