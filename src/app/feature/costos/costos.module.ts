import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostosRoutingModule } from './costos-routing.module';
import { ActualizaCostoComponent } from './components/actualiza-costo/actualiza-costo.component';
import { ListarCostoComponent } from './components/listar-costo/listar-costo.component';
import { CostoComponent } from './components/costo/costo.component';
import { CrearCostoComponent } from './components/crear-costo/crear-costo.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ListarCostoComponent,
    ActualizaCostoComponent,
    CostoComponent,
    CrearCostoComponent    
  ],
  imports: [
    CommonModule,
    SharedModule,
    CostosRoutingModule
  ]
})
export class CostosModule { }
