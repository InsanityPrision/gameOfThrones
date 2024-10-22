export type Character = {
  name: string;
  surName: string;
  age: number;
  isAlive: boolean;
};

export type King = Character & {
  yearsOfReign: number;
  prhase: "Vais a morir todos";
};
