import { daenerys } from "../../fighter/data/data";
import { createAdviser } from "../factory/createAdviser";
import { type Adviser } from "../types";

const tyrionData = { name: "Tyrion", surname: "Lannister", age: 27 };
const adviserPhrase = "No sé por qué, pero creo que voy a morir pronto";
const tyrionBoss = daenerys;

const tyrion: Adviser = createAdviser(tyrionData, adviserPhrase, tyrionBoss);

export default tyrion;
