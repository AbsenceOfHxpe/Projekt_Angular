import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWypozyczenieComponent } from './add-wypozyczenie.component';

describe('AddWypozyczenieComponent', () => {
  let component: AddWypozyczenieComponent;
  let fixture: ComponentFixture<AddWypozyczenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWypozyczenieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddWypozyczenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
