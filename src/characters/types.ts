export interface CharacterData {
  name: string;
  surname?: string;
  age: number;
  imageUrl: string;
}

export interface CharacterStructure {
  characterData: CharacterData;
  isAlive: boolean;
  die: () => void;
  talk: () => string;
}
