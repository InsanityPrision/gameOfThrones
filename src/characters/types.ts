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

export type Adviser = Character & {
  heAdvise: King | Fighter | Squire;
  phrase: "No sé por qué, pero creo que voy a morir pronto";
};

export type Squire = Character & {
  heServe: Fighter;
  astute: number;
  phrase: "Soy un loser";
};
