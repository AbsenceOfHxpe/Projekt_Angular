import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wypozyczenie } from './wypozyczenie';

@Injectable()
export class WypozyczenieService {
  private borrowsArray:Wypozyczenie[]=[];

  constructor(private http: HttpClient) { 
    this.borrowsArray=[
      new Wypozyczenie(1,3,new Date(2023,11,18,12,0,0),14),
      new Wypozyczenie(2,3,new Date(2023,11,17,12,0,0),10)
    ];
  }
  addWynajetyRower(borrow: Wypozyczenie):void{
    borrow.id = this.borrowsArray.length + 1;
    this.borrowsArray.push(borrow);
  }

  getWynajeteRowery():Wypozyczenie[]{
    return this.borrowsArray;
  }
  getWynajetyRower(which: number):Wypozyczenie{
    for (let i = 0; i < this.borrowsArray.length; i++) {
      if (this.borrowsArray[i].id === which) {
        return this.borrowsArray[i];
      }
    }
    return null;
  }
  deleteWynajetyRower(id:number):void{
    console.log("Id borrow do usunięcia: "+id);
    for (let i = 0; i < this.borrowsArray.length; i++) {
      if (this.borrowsArray[i].id === id) {
        this.borrowsArray.splice(i, 1)[0];
      }
    }
    console.log(this.borrowsArray);
  }
}