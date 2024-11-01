import { jaime } from "../../fighter/data/data.js";
import createSquire from "../factory/Squire.js";
import { type SquireStrucutre } from "../types";

const bronnData = { name: "Bronn", age: 34, imageUrl: "images/bronn.webp" };
const squirePhrase = "Soy un loser";
const bronnBoss = jaime;
const bronnToadyLevel = 6;

const bronn: SquireStrucutre = createSquire(
  bronnData,
  squirePhrase,
  bronnBoss,
  bronnToadyLevel,
);

export default bronn;
