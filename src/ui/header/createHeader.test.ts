import createMainHeader from ".";

describe("Given the component header", () => {
  describe("When render", () => {
    test("Then it should render 'Game of thrones' inside the heading", () => {
      const screen = document.createElement("div");
      const expectedTitle = /game of thrones/i;

      const header = createMainHeader();

      screen.appendChild(header);

      const title = screen.querySelector("h1");

      expect(title?.textContent).toMatch(expectedTitle);
    });
  });
});
