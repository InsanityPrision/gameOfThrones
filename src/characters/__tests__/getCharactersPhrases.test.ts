import getCharactersPhrases from "..";
import { daenerys, jaime } from "../fighter/data/data";
import bronn from "../squire/data/data";

describe("Given the getCharactersPhrases", () => {
  describe("When it receives a list of 3 characters", () => {
    test("Then it should return a list of thre phrases", () => {
      const expectedPhrases = [
        "Primero pego y luego pregunto",
        "Soy un loser",
        "Primero pego y luego pregunto",
      ];

      const phrases = getCharactersPhrases([jaime, bronn, daenerys]);

      expect(phrases).toEqual(expectedPhrases);
    });
  });
});
