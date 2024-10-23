import { type Fighter } from "../fighter/fighter";
import { type Character } from "../types";

export type Squire = Character & {
  heServe: Fighter;
  astute: number;
  phrase: "Soy un loser";
};
