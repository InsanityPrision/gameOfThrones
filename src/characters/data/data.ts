import createFighter from "../fighter/factory/createFighter.js";
import { type Fighter } from "../fighter/types";
import { type Character } from "../types";

const jaime: Fighter = createFighter(
  {
    name: "Jaime",
    surname: "Lannister",
    age: 44,
  },
  7,
  "Espada",
);

const daenerys: Fighter = createFighter(
  {
    name: "Daenerys",
    surname: "Targaryen",
    age: 23,
  },
  9,
  "Espada",
);

export const characters: Character[] = [jaime, daenerys];
