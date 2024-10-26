import createKing from "../factory/createKing";
import { type King } from "../types";

const joffreyData = { name: "Joffrey", surname: "Baratheon", age: 12 };
const kingPhrase = "Vais a morir todos";
const joffreyYearsOfReign = 1;

const joffrey: King = createKing(joffreyData, kingPhrase, joffreyYearsOfReign);

export default joffrey;
