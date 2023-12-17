import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZwrotComponent } from './zwrot.component';

describe('ZwrotComponent', () => {
  let component: ZwrotComponent;
  let fixture: ComponentFixture<ZwrotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZwrotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZwrotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
