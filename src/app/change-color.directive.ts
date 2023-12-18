import { Directive, ElementRef, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class ChangeColorDirective implements OnChanges {
  @Input('changeColor') condition: boolean;
  index:number=0;

  constructor(private elRef: ElementRef) {
  }

  ngOnChanges() {
    if (this.condition) {
        setInterval(() => {
            if (this.index === 0) {
                this.elRef.nativeElement.style.background = 'red';
                this.index++;
            }
            else {
                this.elRef.nativeElement.style.background = 'green';
                this.index = 0;
            }
           }, 400);
    }  
  }

}