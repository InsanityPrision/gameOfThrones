import Fighter from "../Fighter/Fighter.js";

const jaimeData = {
  name: "Jaime",
  surname: "Lannister",
  age: 44,
  imageUrl: "images/jaime.webp",
};
const jaimeSkillLevel = 7;
const jaimeWeapon = "Espada";

export const jaime: Fighter = new Fighter(
  jaimeData,
  jaimeWeapon,
  jaimeSkillLevel,
);

const daenerysData = {
  name: "Daenerys",
  surname: "Targaryen",
  age: 23,
  imageUrl: "images/daenerys.webp",
};
const daenerysSkillLevel = 9;
const daenerysWeapon = "Espada";

export const daenerys: Fighter = new Fighter(
  daenerysData,
  daenerysWeapon,
  daenerysSkillLevel,
);
