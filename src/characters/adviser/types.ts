import { type Fighter } from "../fighter/types";
import { type King } from "../king/types";
import { type Squire } from "../squire/types";
import { type Character } from "../types";

export type Adviser = Character & {
  advised: King | Fighter | Squire;
  phrase: "No sé por qué, pero creo que voy a morir pronto";
  talk: () => string;
};
