import { Component } from '@angular/core';
import { Rower } from '../rower';
import { RowersService } from '../rowers.service';


@Component({
  selector: 'app-rower',
  templateUrl: './rower.component.html',
  styleUrl: './rower.component.css',
})

export class RowerComponent {
    BikeArray:Rower[];
    sortValue:string='asc';
    sortVariable:string='model';
    
    constructor(private _rowersService:RowersService){
      this.BikeArray = this._rowersService.getRowers();
    }

}
