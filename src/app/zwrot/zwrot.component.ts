import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WypozyczenieService } from '../wypozyczenie.service';
import { RowersService } from '../rowers.service';
import { OplataService } from '../oplata.service';
import { Wypozyczenie } from '../wypozyczenie';
import { Rower } from '../rower';

@Component({
  selector: 'app-zwrot',
  templateUrl: './zwrot.component.html',
  styleUrls: ['./zwrot.component.css']
})
export class ZwrotComponent implements OnInit {
  borrowId!: number;
  bike: Rower;
  borrow: Wypozyczenie;
  oplataStandardowa: number;
  doplata: number;
  kara: number;
  suma: number;
  hoursBorrowed: number;

  constructor(
    private _rowersService: RowersService,
    private _wypozyczenieService: WypozyczenieService,
    private _router: Router,
    private route: ActivatedRoute,
    private _oplataService: OplataService
  ) {}

  ngOnInit(): void {
    const borrowId = Number(this.route.snapshot.paramMap.get('id'));
    this.borrowId = borrowId;
    this.borrow = this._wypozyczenieService.getWynajetyRower(this.borrowId);
    this.bike = this._rowersService.getRower(this.borrow.idRoweru);
    
    this.hoursBorrowed =
      (new Date().getTime() - new Date(this.borrow.dataWynajmu).getTime()) /
      (3600 * 1000);
    this.oplataStandardowa = this._oplataService.getOplataStandardowa(this.borrow.dataWynajmu,this.bike.cena);
    this.doplata = this._oplataService.getDoplataZaWczesniejszyZwrot(this.borrow.dataWynajmu,this.bike.cena,this.borrow.liczbaGodzin);
    this.kara = this._oplataService.getKara(this.borrow.dataWynajmu,this.bike.cena,this.borrow.liczbaGodzin);
    this.suma = this._oplataService.getDoZaplaty(this.borrow.dataWynajmu,this.bike.cena,this.borrow.liczbaGodzin);
  }

  deleteWynajetyRower(id: number) {
    this._wypozyczenieService.deleteWynajetyRower(id);
    this._router.navigate(['/wypozyczenia-component']);
  }
}
