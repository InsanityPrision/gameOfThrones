import { type Fighter } from "../fighter/types";

export type ToadyLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface SquireStrucutre {
  boss: Fighter;
  toadyLevel: ToadyLevel;
}
