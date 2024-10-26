import { type Fighter } from "../fighter/types";
import { type Character } from "../types";

export type ToadyLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Squire = Character & {
  boss: Fighter;
  toadyLevel: ToadyLevel;
};
