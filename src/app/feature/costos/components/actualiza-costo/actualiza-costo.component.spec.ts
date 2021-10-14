import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaCostoComponent } from './actualiza-costo.component';

describe('ActualizaCostoComponent', () => {
  let component: ActualizaCostoComponent;
  let fixture: ComponentFixture<ActualizaCostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaCostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizaCostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
