import { type Fighter } from "../fighter/fighter";
import { type Character } from "../types";

export type Squire = Character & {
  boss: Fighter;
  astute: number;
  phrase: "Soy un loser";
  talk: (phrase: string) => string;
};
