import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WypozyczenieService } from '../wypozyczenie.service';
import { RowersService } from '../rowers.service';
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
  hoursBorrowed: number;
  hoursBorrowedAsDate: number;

  constructor(
    private _rowersService: RowersService,
    private _wypozyczenieService: WypozyczenieService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const borrowId = Number(this.route.snapshot.paramMap.get('id'));
    this.borrowId = borrowId;
    this.borrow = this._wypozyczenieService.getWynajetyRower(this.borrowId);
    this.bike = this._rowersService.getRower(this.borrow.idRoweru);
    
    this.hoursBorrowedAsDate =
      new Date().getTime() - new Date(this.borrow.dataWynajmu).getTime();
    this.hoursBorrowed =
      (new Date().getTime() - new Date(this.borrow.dataWynajmu).getTime()) /
      (3600 * 1000);
  }

  deleteWynajetyRower(id: number) {
    this._wypozyczenieService.deleteWynajetyRower(id);
    this._router.navigate(['/wypozyczenia-component']);
  }
}
