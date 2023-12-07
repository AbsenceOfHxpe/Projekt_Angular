import { Component } from '@angular/core';
import { Rower } from '../rower';
import { RowersService } from '../rowers.service';
import { SortBikesPipe } from "../sort-bikes.pipe";


@Component({
  selector: 'app-rower',
  templateUrl: './rower.component.html',
  styleUrl: './rower.component.css',
})

export class RowerComponent {
    BikeArray:Rower[];
    sortValue:string='';
    sortVariable:string='';
    
    constructor(private rowersService:RowersService){
      this.BikeArray = this.rowersService.getRowers();
    }

}
