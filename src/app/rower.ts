let nextId = 1;

function generateUniqueId(): number {
  return nextId++;
}

export class Rower {
  //id: number;
  model:string;
  rodzaj:string;
  rozmiarRamy:string;
  cena: number;

  constructor(model: string, rodzaj: string, rozmiarRamy: string, cena: number) {
    //this.id = generateUniqueId();
    this.model = model;
    this.rodzaj = rodzaj;
    this.rozmiarRamy = rozmiarRamy;
    this.cena = cena;
  }

}
