import { jaime } from "../../fighter/data/data.js";
import { Squire } from "../Squire/Squire.js";

const bronnData = { name: "Bronn", age: 34, imageUrl: "images/bronn.webp" };
const bronnBoss = jaime;
const bronnToadyLevel = 6;

const bronn: Squire = new Squire(bronnData, bronnBoss, bronnToadyLevel);

export default bronn;
