import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRowerComponent } from './edit-rower.component';

describe('EditRowerComponent', () => {
  let component: EditRowerComponent;
  let fixture: ComponentFixture<EditRowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
