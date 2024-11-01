import { type CharacterStructure } from "./types";

const getCharactersPhrases = (characters: CharacterStructure[]): string[] => {
  const charactersPhrases: string[] = [];

  characters.forEach((character) => {
    charactersPhrases.push(character.talk());
  });

  return charactersPhrases;
};

export default getCharactersPhrases;
