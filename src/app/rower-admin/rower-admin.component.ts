import { Component } from '@angular/core';
import { Rower } from '../rower';

@Component({
  selector: 'app-rower-admin',
  templateUrl: './rower-admin.component.html',
  styleUrl: './rower-admin.component.css'
})
export class RowerAdminComponent {
  BikeArray:Rower[];
  ktoryRowerDoEdycji=-1;
    
    constructor(){
      this.BikeArray=[new Rower("RMX Swift","miejski","XL",15.10)];
    }


    doEditRower(data:{rower:Rower, ktory:number}){
      this.BikeArray[data.ktory]=data.rower;
      this.ktoryRowerDoEdycji=-1;
    }

    RemoveRower(index:number){
      this.BikeArray = this.BikeArray.filter((obj, i) => i !== index);;
    }
}
