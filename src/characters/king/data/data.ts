import { King } from "../factory/King.js";

const joffreyData = {
  name: "Joffrey",
  surname: "Baratheon",
  age: 12,
  imageUrl: "images/joffrey.webp",
};
const joffreyYearsOfReign = 1;

const joffrey: King = new King(joffreyData, joffreyYearsOfReign);

export default joffrey;
