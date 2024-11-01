import { daenerys } from "../../fighter/data/data.js";
import { createAdviser } from "../factory/Adviser.js";
import { type AdviserStructure } from "../types";

const tyrionData = {
  name: "Tyrion",
  surname: "Lannister",
  age: 27,
  imageUrl: "images/tyron.webp",
};
const adviserPhrase = "No sé por qué, pero creo que voy a morir pronto";
const tyrionBoss = daenerys;

const tyrion: AdviserStructure = createAdviser(
  tyrionData,
  adviserPhrase,
  tyrionBoss,
);

export default tyrion;
