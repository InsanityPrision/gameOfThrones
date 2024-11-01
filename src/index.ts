import { characters } from "./characters/data/data.js";
import createApp from "./components/app/createApp.js";

const rootContainer = document.querySelector(".root");

if (!rootContainer) {
  throw new Error("Root container does not exist");
}

rootContainer.appendChild(createApp(characters));
