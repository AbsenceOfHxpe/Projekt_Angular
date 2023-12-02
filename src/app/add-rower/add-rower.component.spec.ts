import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRowerComponent } from './add-rower.component';

describe('AddRowerComponent', () => {
  let component: AddRowerComponent;
  let fixture: ComponentFixture<AddRowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
