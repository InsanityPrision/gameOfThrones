import { type Character } from "../types";

export type King = Character & {
  yearsOfReign: number;
  phrase: "Vais a morir todos";
  talk: () => string;
};
