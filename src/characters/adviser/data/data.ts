import { daenerys } from "../../fighter/data/data.js";
import { createAdviser } from "../factory/createAdviser.js";
import { type Adviser } from "../types";

const tyrionData = {
  name: "Tyrion",
  surname: "Lannister",
  age: 27,
  imageUrl: "images/tyron.webp",
};
const adviserPhrase = "No sé por qué, pero creo que voy a morir pronto";
const tyrionBoss = daenerys;

const tyrion: Adviser = createAdviser(tyrionData, adviserPhrase, tyrionBoss);

export default tyrion;
