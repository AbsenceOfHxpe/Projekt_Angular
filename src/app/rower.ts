let nextId = 1;

function generateUniqueId(): number {
  return nextId++;
}

export class Rower {
  id: number;
  model:string;
  rodzaj:string;
  rozmiarRamy:string;
  cena: number;

  constructor(id: number, model: string, rodzaj: string, rozmiarRamy: string, cena: number) {
    this.id = id;
    this.model = model;
    this.rodzaj = rodzaj;
    this.rozmiarRamy = rozmiarRamy;
    this.cena = cena;
  }

}
