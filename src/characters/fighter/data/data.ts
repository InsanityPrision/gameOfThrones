import createFighter from "../factory/Fighter.js";
import { type FighterStructure } from "../types";

const jaimeData = {
  name: "Jaime",
  surname: "Lannister",
  age: 44,
  imageUrl: "images/jaime.webp",
};
const jaimeSkillLevel = 7;
const jaimeWeapon = "Espada";
const fighterPhrase = "Primero pego y luego pregunto";

export const jaime: FighterStructure = createFighter(
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

export const daenerys: FighterStructure = createFighter(
  daenerysData,
  daenerysSkillLevel,
  daenerysWeapon,
  fighterPhrase,
);
