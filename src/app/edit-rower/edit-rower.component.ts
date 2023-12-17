import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Dodane import Router
import { Rower } from '../rower';
import { RowersService } from '../rowers.service';

@Component({
  selector: 'app-edit-rower',
  templateUrl: './edit-rower.component.html',
  styleUrls: ['./edit-rower.component.css'] // Poprawiono błąd w nazwie stylu
})
export class EditRowerComponent implements OnInit {
  rower!: Rower;
  @Output() doEditInParent = new EventEmitter<{ rower: Rower, ktory: number }>();
  form4edit: FormGroup;
  private rowersService: RowersService;
  private route: ActivatedRoute;
  private router: Router; // Dodane deklaracje routera

  constructor(
    private _rowersService: RowersService,
    private _route: ActivatedRoute,
    private _router: Router // Dodane wstrzykiwanie routera
  ) {
    this.rowersService = _rowersService;
    this.route = _route;
    this.router = _router;
    this.form4edit = new FormGroup({
      model: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      rodzaj: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-z]*$')]),
      rozmiarRamy: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]*$')]),
      cena: new FormControl('', Validators.compose([Validators.required, Validators.min(0), Validators.max(300)]))
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.rower = this.rowersService.getRower(id);
    }
    this.form4edit.setValue({
      model: this.rower.model,
      rodzaj: this.rower.rodzaj,
      rozmiarRamy: this.rower.rozmiarRamy,
      cena: this.rower.cena
    });
  }

  doEditRower() {
    let rowerAfterEdit = new Rower(this.rower.id, this.form4edit.value.model, this.form4edit.value.rodzaj, this.form4edit.value.rozmiarRamy, this.form4edit.value.cena);
    this.rowersService.editRower(rowerAfterEdit);
    // this.doEditInParent.emit({rower: rowerAfterEdit, ktory: this.ktoryRower});
    
    // Przekierowanie do 'rower-admin-component' po zakończeniu edycji
    this.router.navigate(['/rower-admin-component']);
  }
}