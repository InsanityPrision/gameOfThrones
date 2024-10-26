import { jaime } from "../../fighter/data/data";
import createSquire from "../factory/createSquire";
import { type Squire } from "../types";

const bronnData = { name: "Bronn", age: 34 };
const squirePhrase = "Soy un loser";
const bronnBoss = jaime;
const bronnToadyLevel = 6;

const bronn: Squire = createSquire(
  bronnData,
  squirePhrase,
  bronnBoss,
  bronnToadyLevel,
);

export default bronn;
