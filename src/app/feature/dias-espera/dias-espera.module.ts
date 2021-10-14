import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiasEsperaRoutingModule } from './dias-espera-routing.module';
import { DiasEsperaComponent } from './components/dias-espera/dias-espera.component';
import { ActualizarDiasEsperaComponent } from './components/actualizar-dias-espera/actualizar-dias-espera.component';
import { CrearDiasEsperaComponent } from './components/crear-dias-espera/crear-dias-espera.component';
import { ListarDiasEsperaComponent } from './components/listar-dias-espera/listar-dias-espera.component';
import { SharedModule } from '@shared/shared.module';
import { DiasEsperaService } from './shared/service/dias-espera.service';
import { CiudadService } from '@ciudad/shared/service/ciudad.service';
import { FiltroPipeDiasEspera } from '../pipe/filtro.pipe';


@NgModule({
  declarations: [
    DiasEsperaComponent,
    ActualizarDiasEsperaComponent,
    CrearDiasEsperaComponent,
    ListarDiasEsperaComponent,
    FiltroPipeDiasEspera
  ],
  imports: [
    CommonModule,
    SharedModule,
    DiasEsperaRoutingModule
  ],
  providers: [DiasEsperaService, CiudadService]
})
export class DiasEsperaModule { }
