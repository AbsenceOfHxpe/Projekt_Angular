import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WypozyczenieService } from '../wypozyczenie.service';
import { RowersService } from '../rowers.service';
import { Wypozyczenie } from '../wypozyczenie';
import { Rower } from '../rower';

@Component({
  selector: 'app-zwrot',
  templateUrl: './zwrot.component.html',
  styleUrl: './zwrot.component.css'
})
export class ZwrotComponent implements OnInit{
  private route = inject(ActivatedRoute);
  borrowId!:number;
  bike:Rower;
  borrow:Wypozyczenie;
  hoursBorrowed:number;
  hoursBorrowedAsDate:number;
  private wypozyczenieService:WypozyczenieService;
  private rowerService:RowersService;
  private router: Router;

  constructor(private _rowersService:RowersService, private _wypozyczenieService:WypozyczenieService, private _router: Router){
    this.rowerService = _rowersService;
    this.wypozyczenieService = _wypozyczenieService;
    this.borrow = this.wypozyczenieService.getWynajetyRower(this.borrowId);
    this.bike = this.rowerService.getRower(this.borrow.idRoweru);
    this.router = _router;
    this.hoursBorrowedAsDate = new Date().getTime() - new Date(this.borrow.dataWynajmu).getTime();
    this.hoursBorrowed = (new Date().getTime() - new Date(this.borrow.dataWynajmu).getTime())/ (3600 * 1000);
     
  }

  ngOnInit(): void {
    const borrowId = Number(this.route.snapshot.paramMap.get('id'));
    this.borrowId = borrowId;
    //this.borrow = this.wypozyczenieService.getWynajetyRower(this.borrowId);
  }

  deleteWynajetyRower(id:number) {
    this.wypozyczenieService.deleteWynajetyRower(id);
    this.router.navigate(['/wypozyczenia-component']);
  }
}
