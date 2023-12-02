import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Rower } from '../rower';

@Component({
  selector: 'app-edit-rower',
  templateUrl: './edit-rower.component.html',
  styleUrl: './edit-rower.component.css'
})



export class EditRowerComponent implements OnInit {
  
  form4edit:FormGroup;

  @Input() rower!:Rower;
  @Input() ktoryRower:number=-1;
  @Output() doEditInParent=new EventEmitter<{rower:Rower,ktory:number}>();

  constructor(){
    this.form4edit = new FormGroup({
      model: new FormControl('', [Validators.required,Validators.maxLength(30)]),
      rodzaj: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-z]*$')]),
      rozmiarRamy:new FormControl('',[Validators.required, Validators.pattern('^[A-Z]*$')]),
      cena: new FormControl('', Validators.compose([Validators.required, Validators.min(0),Validators.max(300)]))
    });
  }



  ngOnInit(): void {
     
    this.form4edit.setValue(
      {model: this.rower.model, rodzaj: this.rower.rodzaj, rozmiarRamy:this.rower.rozmiarRamy,cena: this.rower.cena});
}

doEditRower(){
  let rowerAfterEdit=new Rower(this.form4edit.value.model,this.form4edit.value.rodzaj,this.form4edit.value.rozmiarRamy,this.form4edit.value.cena);
   this.doEditInParent.emit({rower:rowerAfterEdit,ktory:this.ktoryRower});
} 
}

