export type Character = {
  name: string;
  surName: string;
  age: number;
  isAlive: boolean;
};

export type King = Character & {
  yearsOfReign: number;
  phrase: "Vais a morir todos";
};

export type Fighter = Character & {
  weapon: string;
  skill: number;
  phrase: "Primero pego y luego pregunto";
};
