import { Component } from '@angular/core';
import { Rower } from '../rower';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RowersService } from '../rowers.service';

@Component({
  selector: 'app-add-rower',
  templateUrl: './add-rower.component.html',
  styleUrls: ['./add-rower.component.css']
})
export class AddRowerComponent {

  form4edit: FormGroup;

  constructor(private rowersService: RowersService) {
    this.form4edit = new FormGroup({
      model: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      rodzaj: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-z]*$')]),
      rozmiarRamy: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]*$')]),
      cena: new FormControl('', Validators.compose([Validators.required, Validators.min(0), Validators.max(300)]))
    });
  }

  doAddRower() {
    if (this.form4edit.valid) {
      const newRower = new Rower(
        0,
        this.form4edit.value.model,
        this.form4edit.value.rodzaj,
        this.form4edit.value.rozmiarRamy,
        this.form4edit.value.cena
      );

      this.rowersService.addRower(newRower);

    }
  }
}