const createMainHeader = (): HTMLElement => {
  const mainHeader = document.createElement("header");
  mainHeader.classList.add("main-header");

  mainHeader.textContent = "Game of Thrones";

  return mainHeader;
};

export default createMainHeader;
