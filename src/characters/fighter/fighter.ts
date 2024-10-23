import { type Character } from "../types";

export type Fighter = Character & {
  weapon: string;
  skill: number;
  phrase: "Primero pego y luego pregunto";
  talk: (phrase: string) => string;
};
