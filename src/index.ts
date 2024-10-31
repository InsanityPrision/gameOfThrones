import createApp from "./app/createApp.js";
import { characters } from "./characters/data/data.js";

const rootContainer = document.querySelector(".root");

if (!rootContainer) {
  throw new Error("Root container does not exist");
}

rootContainer.appendChild(createApp(characters));
