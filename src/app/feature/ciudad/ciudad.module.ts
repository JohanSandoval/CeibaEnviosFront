import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { CiudadRoutingModule } from './ciudad-routing.module';
import { CiudadService } from './shared/service/ciudad.service';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { CrearCiudadComponent } from './components/crear-ciudad/crear-ciudad.component';
import { ListarCiudadComponent } from './components/listar-ciudad/listar-ciudad.component';
import { ActualizarCiudadComponent } from './components/actualizar-ciudad/actualizar-ciudad.component';
import { FiltroPipeCiudad } from '../pipe/filtro.pipe';


@NgModule({
  declarations: [
    ListarCiudadComponent,
    CiudadComponent,
    CrearCiudadComponent,
    ActualizarCiudadComponent,
    FiltroPipeCiudad
  ],
  imports: [
    CommonModule,
    SharedModule,
    CiudadRoutingModule
  ],
  providers: [CiudadService]
})
export class CiudadModule { }
