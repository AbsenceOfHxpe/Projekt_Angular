export class Wynajem {
    id: number;
  id_rower:number;
  data_wynajmu:Date;
  liczba_godzin:number;

  constructor(id: number, id_rower:number, data_wynajmu:Date, liczba_godzin:number) {
    this.id = id;
    this.id_rower = id_rower;
    this.data_wynajmu = data_wynajmu;
    this.liczba_godzin=liczba_godzin;
  }
}
