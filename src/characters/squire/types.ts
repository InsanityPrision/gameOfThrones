import { type Fighter } from "../fighter/types";
import { type Character } from "../types";

export type Squire = Character & {
  boss: Fighter;
  toady: number;
  phrase: "Soy un loser";
  talk: () => string;
};
