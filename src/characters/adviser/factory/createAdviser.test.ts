import { jaime } from "../../fighter/data/data";
import { type CharacterData } from "../../types";
import { createAdviser } from "./createAdviser";

describe("Given the createAdviser function", () => {
  describe("When it's called", () => {
    const characterData: CharacterData = {
      name: "Arthur",
      surname: "Smith",
      age: 56,
    };
    const adviserPhrase = "No sé por qué, pero creo que voy a morir pronto";
    const advised = jaime;

    test("Then it should return an alive Adviser", () => {
      const adviser = createAdviser(characterData, adviserPhrase, advised);

      expect(adviser.isAlive).toBeTruthy();
    });

    test("Then it should return a adviser who says 'No sé por qué, pero creo que voy a morir pronto'", () => {
      const phrase = "No sé por qué, pero creo que voy a morir pronto";

      const adviser = createAdviser(characterData, adviserPhrase, advised);

      expect(adviser.talk()).toEqual(phrase);
    });

    test("Then it should return a adviser who can die", () => {
      const adviser = createAdviser(characterData, adviserPhrase, advised);

      adviser.die();

      expect(adviser.isAlive).toBeFalsy();
    });
  });
});
