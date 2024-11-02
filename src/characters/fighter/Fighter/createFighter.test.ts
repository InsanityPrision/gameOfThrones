import { type CharacterData } from "../../types";
import Fighter from "./Fighter";

describe("Given the Fighter class", () => {
  describe("When it's called", () => {
    const characterData: CharacterData = {
      name: "Alex",
      surname: "Perez",
      age: 24,
      imageUrl: "",
    };
    const phrase = "Primero pego y luego pregunto";
    const skillLevel = 5;
    const weapon = "Espada";

    test("Then it should return an alive fighter", () => {
      const fighter = new Fighter(characterData, weapon, skillLevel);

      expect(fighter.isAlive).toBeTruthy();
    });

    test("Then it should return a fighter who says 'Primero pego y luego pregunto'", () => {
      const fighter = new Fighter(characterData, weapon, skillLevel);

      expect(fighter.talk()).toEqual(phrase);
    });

    test("Then it should return a fighter who can die", () => {
      const fighter = new Fighter(characterData, weapon, skillLevel);

      fighter.die();

      expect(fighter.isAlive).toBeFalsy();
    });
  });
});
