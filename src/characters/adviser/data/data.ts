import { daenerys } from "../../fighter/data/data.js";
import { Adviser } from "../factory/Adviser.js";

const tyrionData = {
  name: "Tyrion",
  surname: "Lannister",
  age: 27,
  imageUrl: "images/tyron.webp",
};
const tyrionBoss = daenerys;

const tyrion: Adviser = new Adviser(tyrionBoss, tyrionData);

export default tyrion;
