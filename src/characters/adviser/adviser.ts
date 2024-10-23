import { type Fighter } from "../fighter/fighter";
import { type King } from "../king/king";
import { type Squire } from "../squire/squire";
import { type Character } from "../types";

export type Adviser = Character & {
  heAdvise: King | Fighter | Squire;
  phrase: "No sé por qué, pero creo que voy a morir pronto";
  talk: (phrase: string) => string;
};
