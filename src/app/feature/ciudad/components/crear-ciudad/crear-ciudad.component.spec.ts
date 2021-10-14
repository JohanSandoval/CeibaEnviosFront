import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CiudadService } from '@ciudad/shared/service/ciudad.service';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

import { CrearCiudadComponent } from './crear-ciudad.component';

describe('CrearCiudadComponent', () => {
  let component: CrearCiudadComponent;
  let fixture: ComponentFixture<CrearCiudadComponent>;
  let ciudadService : CiudadService;

  beforeEach( waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CrearCiudadComponent],
        imports:[
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule
        ], 
        providers: [CiudadService, HttpService]
      }).compileComponents();
    })
  );

/*
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCiudadComponent ]
    })
    .compileComponents();
  });
*/

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCiudadComponent);
    component = fixture.componentInstance;
    ciudadService = TestBed.inject(CiudadService);
    spyOn(ciudadService, 'crear').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
