import createFighter from "./createFighter";

describe("Given the createFighter function", () => {
  describe("When it's called", () => {
    test("Then it should return an alive fighter", () => {
      const fighter = createFighter(
        { name: "Alex", surname: "Perez", age: 24 },
        5,
        "Espada",
      );

      expect(fighter.isAlive).toBeTruthy();
    });

    test("Then it should return a fighter who says 'Primero pego y luego pregunto'", () => {
      const phrase = "Primero pego y luego pregunto";
      const fighter = createFighter(
        { name: "Alex", surname: "Perez", age: 24 },
        5,
        "Espada",
      );

      expect(fighter.talk()).toEqual(phrase);
    });

    test("Then it should return a fighter who can die", () => {
      const fighter = createFighter(
        { name: "Alex", surname: "Perez", age: 24 },
        5,
        "Espada",
      );

      fighter.die();

      expect(fighter.isAlive).toBeFalsy();
    });
  });
});
