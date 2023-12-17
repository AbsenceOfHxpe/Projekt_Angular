import { Component } from '@angular/core';
import { WypozyczenieService } from '../wypozyczenie.service';
import { RowersService } from '../rowers.service';
import { Wypozyczenie } from '../wypozyczenie';

@Component({
  selector: 'app-wypozyczenia',
  templateUrl: './wypozyczenia.component.html',
  styleUrl: './wypozyczenia.component.css'
})
export class WypozyczeniaComponent {

  private wypozyczenieService:WypozyczenieService;
  private rowerService:RowersService;

  borrows:Wypozyczenie[]=[];

  constructor(private _rowersService:RowersService, private _wypozyczenieService:WypozyczenieService){
    this.wypozyczenieService = _wypozyczenieService;
    this.rowerService = _rowersService;
    this.borrows = _wypozyczenieService.getWynajeteRowery();
  }

}
