export type Character = {
  name: string;
  surname: string;
  age: number;
  isAlive: boolean;
  die: (isAlvie: boolean | undefined) => boolean | undefined;
};
