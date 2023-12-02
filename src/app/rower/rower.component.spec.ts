import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowerComponent } from './rower.component';

describe('RowerComponent', () => {
  let component: RowerComponent;
  let fixture: ComponentFixture<RowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
