import { type Adviser } from "../adviser/adviser";
import { type Fighter } from "../fighter/fighter";
import { type King } from "../king/king";
import { type Squire } from "../squire/squire";
import { type Character } from "../types";

const joffrey: King = {
  name: "Joffrey",
  surname: "Baratheon",
  age: 14,
  isAlive: true,
  yearsOfReign: 2,
  phrase: "Vais a morir todos",
  die(isAlive) {
    if (isAlive) {
      return false;
    }
  },
  talk(phrase) {
    return phrase;
  },
};

const jaime: Fighter = {
  name: "Jaime",
  surname: "Lannister",
  age: 44,
  isAlive: true,
  weapon: "Espada",
  skill: 7,
  phrase: "Primero pego y luego pregunto",
  die(isAlive) {
    if (isAlive) {
      return false;
    }
  },
  talk(phrase) {
    return phrase;
  },
};

const daenerys: Fighter = {
  name: "Daenerys",
  surname: "Targaryen",
  age: 23,
  isAlive: true,
  weapon: "Espada",
  skill: 9,
  phrase: "Primero pego y luego pregunto",
  die(isAlive) {
    if (isAlive) {
      return false;
    }
  },
  talk(phrase) {
    return phrase;
  },
};

const tyrion: Adviser = {
  name: "Tyrion",
  surname: " Lannister",
  age: 40,
  isAlive: true,
  advised: daenerys,
  phrase: "No sé por qué, pero creo que voy a morir pronto",
  die(isAlive) {
    if (isAlive) {
      return false;
    }
  },
  talk(phrase) {
    return phrase;
  },
};

const bronn: Squire = {
  name: "Bornn",
  surname: "",
  age: 32,
  isAlive: true,
  boss: jaime,
  toady: 6,
  phrase: "Soy un loser",
  die(isAlive) {
    if (isAlive) {
      return false;
    }
  },
  talk(phrase) {
    return phrase;
  },
};

export const characters: Character[] = [
  joffrey,
  jaime,
  daenerys,
  tyrion,
  bronn,
];
