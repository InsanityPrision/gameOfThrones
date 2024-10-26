import createMainHeader from "./ui/header/index.js";

const mainContainer = document.querySelector("div");

if (!mainContainer) {
  throw new Error("Root container does not exist");
}

mainContainer.appendChild(createMainHeader());
