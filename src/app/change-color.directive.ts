import { Directive, ElementRef, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class ChangeColorDirective implements OnChanges {
  @Input('changeColor') condition: any;

  constructor(private elRef: ElementRef) {
  }

  ngOnChanges() {
      if (this.condition) {
        this.elRef.nativeElement.style.color = 'red';
        this.elRef.nativeElement.style.fontWeight= 'bold';
      } else {
        this.elRef.nativeElement.style.color = 'green';
        this.elRef.nativeElement.style.fontWeight= 'bold';
      }
  }

}