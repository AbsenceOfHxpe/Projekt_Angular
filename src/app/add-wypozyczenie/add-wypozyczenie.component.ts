import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Wypozyczenie } from '../wypozyczenie';
import { RowersService } from '../rowers.service';
import { Rower } from '../rower';
import { WypozyczenieService } from '../wypozyczenie.service';

@Component({
  selector: 'app-add-wypozyczenie',
  templateUrl: './add-wypozyczenie.component.html',
  styleUrl: './add-wypozyczenie.component.css'
})
export class AddWypozyczenieComponent implements OnInit{
  private route = inject(ActivatedRoute);
  form4edit:FormGroup;
  bikeId!:number;
  borrows:Wypozyczenie[] = [];
  borrowId!:number;
  hoursCount!:number;
  bike:Rower;
  private wypozyczenieService:WypozyczenieService;
  private rowerService:RowersService;
  private router: Router;

  constructor(private _rowersService:RowersService, private _wypozyczenieService:WypozyczenieService, private _router: Router){
    this.form4edit = new FormGroup({
      id: new FormControl('', [Validators.required]),
      borrowTimeInHours: new FormControl('', [Validators.required, Validators.min(1), Validators.max(48)])
    });
    this.bike = _rowersService.getRower(this.bikeId);
    this.wypozyczenieService = _wypozyczenieService;
    this.borrows = this.wypozyczenieService.getWynajeteRowery();
    this.rowerService = _rowersService;
    this.router = _router;
  }

  ngOnInit(): void {
    const bikeId = Number(this.route.snapshot.paramMap.get('id'));
    this.bikeId = bikeId;
    this.bike = this.rowerService.getRower(this.bikeId);
    this.form4edit.setValue(
      {id: this.borrowId, borrowTimeInHours: this.hoursCount});
  }

  doAddWypozyczenie() : void {
    this.wypozyczenieService.addWynajetyRower(new Wypozyczenie(this.borrowId,this.bikeId,new Date(),this.hoursCount));
    this.router.navigate(['/wypozyczenia-component']);
  }
}
