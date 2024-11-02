import { King } from "../../king/King/King";
import { type CharacterData } from "../../types";
import { Adviser } from "./Adviser";

describe("Given the Adviser class", () => {
  describe("When it's called", () => {
    const characterData: CharacterData = {
      name: "Arthur",
      surname: "Smith",
      age: 56,
      imageUrl: "",
    };
    const advised: King = new King(characterData, 2);

    test("Then it should return an alive Adviser", () => {
      const adviser = new Adviser(advised, characterData);

      expect(adviser.isAlive).toBeTruthy();
    });

    test("Then it should return a adviser who says 'No sé por qué, pero creo que voy a morir pronto'", () => {
      const phrase = "No sé por qué, pero creo que voy a morir pronto";

      const adviser = new Adviser(advised, characterData);

      expect(adviser.talk()).toEqual(phrase);
    });

    test("Then it should return a adviser who can die", () => {
      const adviser = new Adviser(advised, characterData);

      adviser.die();

      expect(adviser.isAlive).toBeFalsy();
    });
  });
});
