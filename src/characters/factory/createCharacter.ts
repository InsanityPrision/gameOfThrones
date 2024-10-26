import { type Character, type CharacterData } from "../types";

export const createCharacter = (
  { name, surname, age }: CharacterData,
  phrase: string,
): Character => {
  const newCharacter: Character = {
    name,
    surname,
    age,
    isAlive: true,
    die() {
      this.isAlive = false;
    },
    talk() {
      return phrase;
    },
  };

  return newCharacter;
};
