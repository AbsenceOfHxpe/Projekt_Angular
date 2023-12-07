import { Component } from '@angular/core';
import { Rower } from '../rower';
import { RowersService } from '../rowers.service';

@Component({
  selector: 'app-rower-admin',
  templateUrl: './rower-admin.component.html',
  styleUrl: './rower-admin.component.css'
})
export class RowerAdminComponent {
  BikeArray:Rower[];
  ktoryRowerDoEdycji=-1;
  private rowersService:RowersService;
    
    constructor(private r:RowersService){
      //this.BikeArray=[new Rower("RMX Swift","miejski","XL",15.10)];
      this.rowersService = r;
      this.BikeArray = this.rowersService.getRowers();
    }


    doEditRower(data:{rower:Rower, ktory:number}){
      //this.BikeArray[data.ktory]=data.rower;
      this.rowersService.editRower(data.rower);
      this.ktoryRowerDoEdycji=-1;
    }

    RemoveRower(index:number){
      this.BikeArray.filter((obj, i) => i !== index);
      this.rowersService.deleteRower(index);
    }
}
