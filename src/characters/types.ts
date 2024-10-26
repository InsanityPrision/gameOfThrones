export type CharacterData = {
  name: string;
  surname?: string;
  age: number;
  imageUrl: string;
};

export type Character = CharacterData & {
  isAlive: boolean;
  die: () => void;
  talk: () => string;
};
