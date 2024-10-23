import { type Character } from "../types";

export type SkillLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Fighter = Character & {
  weapon: string;
  skillLevel: SkillLevel;
  phrase: "Primero pego y luego pregunto";
};
