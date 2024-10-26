import { type CharacterData } from "../../types";
import createFighter from "./createFighter";

describe("Given the createFighter function", () => {
  describe("When it's called", () => {
    const characterData: CharacterData = {
      name: "Alex",
      surname: "Perez",
      age: 24,
    };
    const phrase = "Primero pego y luego pregunto";
    const skillLevel = 5;
    const weapon = "Espada";

    test("Then it should return an alive fighter", () => {
      const fighter = createFighter(characterData, skillLevel, weapon, phrase);

      expect(fighter.isAlive).toBeTruthy();
    });

    test("Then it should return a fighter who says 'Primero pego y luego pregunto'", () => {
      const fighter = createFighter(characterData, skillLevel, weapon, phrase);

      expect(fighter.talk()).toEqual(phrase);
    });

    test("Then it should return a fighter who can die", () => {
      const fighter = createFighter(characterData, skillLevel, weapon, phrase);

      fighter.die();

      expect(fighter.isAlive).toBeFalsy();
    });
  });
});
