import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowerAdminComponent } from './rower-admin.component';

describe('RowerAdminComponent', () => {
  let component: RowerAdminComponent;
  let fixture: ComponentFixture<RowerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RowerAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
