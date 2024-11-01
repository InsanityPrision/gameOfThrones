import createKing from "../factory/King.js";
import { type KingStructure } from "../types";

const joffreyData = {
  name: "Joffrey",
  surname: "Baratheon",
  age: 12,
  imageUrl: "images/joffrey.webp",
};
const kingPhrase = "Vais a morir todos";
const joffreyYearsOfReign = 1;

const joffrey: KingStructure = createKing(
  joffreyData,
  kingPhrase,
  joffreyYearsOfReign,
);

export default joffrey;
