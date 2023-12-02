import { Component } from '@angular/core';
import { Rower } from '../rower';


@Component({
  selector: 'app-rower',
  templateUrl: './rower.component.html',
  styleUrl: './rower.component.css'
})



export class RowerComponent {
    BikeArray:Rower[];
    
    constructor(){
      this.BikeArray=[new Rower("RMX Swift","miejski","XL",15.10)];
    }

}
