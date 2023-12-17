let nextId = 1;

function generateUniqueId(): number {
  return nextId++;
}

export class Rower {
  private _id: number;
  private _model:string;
  private _rodzaj:string;
  private _rozmiarRamy:string;
  private _cena: number;

  constructor(id: number, model: string, rodzaj: string, rozmiarRamy: string, cena: number) {
    this._id = id;
    this._model = model;
    this._rodzaj = rodzaj;
    this._rozmiarRamy = rozmiarRamy;
    this._cena = cena;
  }

  get id():number{
    return this._id
  }

  set id(id:number){
    this._id=id;
  }

  get model():string{
    return this._model
  }

  set model(model:string){
    this._model=model;
  }

  get rodzaj():string{
    return this._rodzaj
  }

  set rodzaj(rodzaj:string){
    this._rodzaj=rodzaj;
  }

  get rozmiarRamy():string{
    return this._rozmiarRamy
  }

  set rozmiarRamy(rozmiarRamy:string){
    this._rozmiarRamy=rozmiarRamy;
  }

  get cena():number{
    return this._cena
  }

  set cena(cena:number){
    this._cena=cena;
  }

}
