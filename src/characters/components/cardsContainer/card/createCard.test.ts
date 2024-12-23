import createCard from ".";
import Fighter from "../../../fighter/Fighter/Fighter";

const screen = document.createElement("div");

afterEach(() => {
  screen.innerHTML = "";
});

describe("Given the card component", () => {
  const jaimeData = {
    name: "Jaime",
    surname: "Lanniester",
    age: 23,
    imageUrl: "",
  };
  const skillLevel = 8;
  const weapon = "";

  describe("When it recives 'Jaime Lanniester'", () => {
    test("Then it should show the image of Jaime Lanniester", () => {
      const expectedAlternativeImageText = /Face of Jaime/i;
      const jaime: Fighter = new Fighter(jaimeData, weapon, skillLevel);

      const jaimeCard = createCard(jaime);

      screen.appendChild(jaimeCard);

      const jaimeImage = screen.querySelector("img");

      expect(jaimeImage).toBeDefined();
      expect(jaimeImage?.alt).toMatch(expectedAlternativeImageText);
    });

    test("Then it should show Jaime Lanniester in a heading", () => {
      const jaime: Fighter = new Fighter(jaimeData, weapon, skillLevel);

      const jaimeName = /jaime lanniester/i;

      const jaimeCard = createCard(jaime);

      screen.appendChild(jaimeCard);

      const jaimeTitle = screen.querySelector("h2");

      expect(jaimeTitle).toBeDefined();
      expect(jaimeTitle?.textContent).toMatch(jaimeName);
    });
  });

  describe("When it recives Jaime Lanniester dead", () => {
    test("Then it should show a thumb down", () => {
      const jaime: Fighter = new Fighter(jaimeData, weapon, skillLevel);

      jaime.die();
      const jaimeCard = createCard(jaime);

      screen.appendChild(jaimeCard);

      const jaimeContent = screen.querySelector("div");

      const jaimeState = jaimeContent?.querySelector("img");

      expect(jaimeState).toBeDefined();
      expect(jaimeState?.alt).toBe("dead");
    });
  });
});
