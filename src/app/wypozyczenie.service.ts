import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wypozyczenie } from './wypozyczenie';

@Injectable()
export class WypozyczenieService {
  private borrowsArray:Wypozyczenie[]=[];

  constructor(private http: HttpClient) { 
    this.borrowsArray=[
      new Wypozyczenie(5,3,new Date(2023,11,17,12,0,0),11)
    ];
  }
  addWynajetyRower(borrow: Wypozyczenie):void{
    this.borrowsArray.push(borrow);
  }

  getWynajeteRowery():Wypozyczenie[]{
    return this.borrowsArray;
  }
  getWynajetyRower(which: number):Wypozyczenie{
    //console.log('get bike service',this.BikeArray);
    for (let i = 0; i < this.borrowsArray.length; i++) {
      if (this.borrowsArray[i].id === which) {
        return this.borrowsArray[i];
      }
    }
    return this.borrowsArray[0];
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