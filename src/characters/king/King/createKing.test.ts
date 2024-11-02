import { King } from "./King";

describe("Given the createKing function", () => {
  describe("When it's called", () => {
    const kingData = {
      name: "Isabel",
      surname: "Alexandra",
      age: 96,
      imageUrl: "",
    };
    const yearsOfReign = 70;

    test("Then it should return a alive king", () => {
      const king: King = new King(kingData, yearsOfReign);

      expect(king.isAlive).toBeTruthy();
    });

    test("Then it should return a king who says 'Vais a morir todos'", () => {
      const phrase = "Vais a morir todos";

      const king: King = new King(kingData, yearsOfReign);

      expect(king.talk()).toEqual(phrase);
    });
  });
});
