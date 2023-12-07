import { Injectable } from '@angular/core';
import { Rower } from './rower';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RowersService {
  private BikeArray:Rower[]=[];

  constructor(private http: HttpClient) { 
    this.BikeArray=[
      new Rower(1,"RMX Swift","Miejski","XL",15.10),
      new Rower(2,"MTB Indiana","Szosowy","M",22.50),
      new Rower(3,"Turbo Levo","Gorski","L",16.00)
    ];
  }
  getRowers():Rower[]{
    return this.BikeArray;
  }
  getRower(which: number):Rower{
    console.log('get bike service',this.BikeArray);
    for (let i = 0; i < this.BikeArray.length; i++) {
      if (this.BikeArray[i].id === which) {
        return this.BikeArray[i];
      }
    }
    return this.BikeArray[0];
  }
  deleteRower(index:number):void{
    this.BikeArray.splice(index, 1)[0]; 
  }
  editRower(rower:Rower):void{
    for (let i = 0; i < this.BikeArray.length; i++) {
      if (this.BikeArray[i].id === rower.id) {
        this.BikeArray[i]=rower;
      }
    }
  }
}