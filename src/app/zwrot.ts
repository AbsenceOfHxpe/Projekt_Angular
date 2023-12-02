export class Zwrot {
    id: number;
  id_rower:number;
  data_zwrotu:Date;

  constructor(id: number, id_rower:number, data_zwrotu:Date) {
    this.id = id;
    this.id_rower = id_rower;
    this.data_zwrotu = data_zwrotu;
  }
}
