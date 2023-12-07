import { Injectable } from '@angular/core';
import { Rower } from './rower';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RowersService {
  private BikeArray:Rower[]=[];

  constructor(private http: HttpClient) { 
    this.BikeArray=[
      new Rower("RMX Swift","Miejski","XL",15.10),
      new Rower("MTB Indiana","Szosowy","M",22.50),
      new Rower("Turbo Levo","Gorski","L",16.00)
    ];
  }
  getRowers():Rower[]{
    return this.BikeArray;
  }
  getRower(which: number):Rower{
    console.log('get bike service',this.BikeArray);
    return this.BikeArray[which];
  }
  deleteRower(index:number):void{
    this.BikeArray.splice(index, 1)[0]; 
  }
}