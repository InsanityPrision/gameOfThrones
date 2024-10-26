import createFighter from "../factory/createFighter.js";
import { type Fighter } from "../types";

const jaimeData = {
  name: "Jaime",
  surname: "Lannister",
  age: 44,
  imageUrl: "images/jaime.webp",
};
const jaimeSkillLevel = 7;
const jaimeWeapon = "Espada";
const fighterPhrase = "Primero pego y luego pregunto";

export const jaime: Fighter = createFighter(
  jaimeData,
  jaimeSkillLevel,
  jaimeWeapon,
  fighterPhrase,
);

const daenerysData = {
  name: "Daenerys",
  surname: "Targaryen",
  age: 23,
  imageUrl: "images/daenerys.webp",
};
const daenerysSkillLevel = 9;
const daenerysWeapon = "Espada";

export const daenerys: Fighter = createFighter(
  daenerysData,
  daenerysSkillLevel,
  daenerysWeapon,
  fighterPhrase,
);
