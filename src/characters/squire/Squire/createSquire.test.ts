import { jaime } from "../../fighter/data/data";
import { Squire } from "./Squire";

describe("Given the Squire class", () => {
  describe("When it's called", () => {
    const squireData = {
      name: "Pedro",
      surname: "Perez",
      age: 34,
      imageUrl: "",
    };
    const boss = jaime;
    const toadyLevel = 9;

    test("Then it should return a alive Squire", () => {
      const squire: Squire = new Squire(squireData, boss, toadyLevel);

      expect(squire.isAlive).toBeTruthy();
    });

    test("Then it should return a squire who says 'Soy un loser'", () => {
      const phrase = "Soy un loser";

      const squire: Squire = new Squire(squireData, boss, toadyLevel);

      expect(squire.talk()).toEqual(phrase);
    });

    test("Then it should return a squire who can die", () => {
      const squire: Squire = new Squire(squireData, boss, toadyLevel);

      squire.die();

      expect(squire.isAlive).toBeFalsy();
    });
  });
});
