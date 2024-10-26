import { type Character } from "./types";

const getCharactersPhrases = (characters: Character[]): string[] => {
  const charactersPhrases: string[] = [];

  characters.forEach((character) => {
    charactersPhrases.push(character.talk());
  });

  return charactersPhrases;
};

export default getCharactersPhrases;
