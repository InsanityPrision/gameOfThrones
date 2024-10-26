import { jaime } from "../../fighter/data/data";
import { type Squire } from "../types";
import createSquire from "./createSquire";

describe("Given the createSquire function", () => {
  describe("When it's called", () => {
    const squireData = { name: "Pedro", surname: "Perez", age: 34 };
    const squirePhrase = "Soy un loser";
    const boss = jaime;
    const toadyLevel = 9;

    test("Then it should return a alive Squire", () => {
      const squire: Squire = createSquire(
        squireData,
        squirePhrase,
        boss,
        toadyLevel,
      );

      expect(squire.isAlive).toBeTruthy();
    });

    test("Then it should return a squire who says 'Soy un loser'", () => {
      const phrase = "Soy un loser";

      const squire = createSquire(squireData, squirePhrase, boss, toadyLevel);

      expect(squire.talk()).toEqual(phrase);
    });

    test("Then it should return a squire who can die", () => {
      const squire = createSquire(squireData, squirePhrase, boss, toadyLevel);

      squire.die();

      expect(squire.isAlive).toBeFalsy();
    });
  });
});
