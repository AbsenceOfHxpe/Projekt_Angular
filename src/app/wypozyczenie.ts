export class Wypozyczenie {
    private _id: number;
    private _idRoweru:number;
    private _dataWynajmu:Date;
    private _liczbaGodzin:number;

    constructor(id: number, idRoweru:number, dataWynajmu:Date, liczbaGodzin:number) {
      this._id = id;
      this._idRoweru = idRoweru;
      this._dataWynajmu = dataWynajmu;
      this._liczbaGodzin=liczbaGodzin;
    }

    get id():number{
      return this._id
    }

    set id(id:number){
      this._id=id;
    }

    get idRoweru():number{
      return this._idRoweru
    }

    set idRoweru(idRoweru:number){
      this._idRoweru=idRoweru;
    }

    get dataWynajmu():Date{
      return this._dataWynajmu;
    }

    set dataWynajmu(dataWynajmu:Date){
      this._dataWynajmu=dataWynajmu;
    }

    get liczbaGodzin():number{
      return this._liczbaGodzin;
    }

    set liczbaGodzin(liczbaGodzin:number){
      this._liczbaGodzin=liczbaGodzin;
    }
}
