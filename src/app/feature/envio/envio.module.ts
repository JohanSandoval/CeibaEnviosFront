import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { EnvioRoutingModule } from './envio-routing.module';
import { EnvioService } from './shared/service/envio.service';
import { EnvioComponent } from './components/envio/envio.component';
import { CrearEnvioComponent } from './components/crear-envio/crear-envio.component';
import { ListarEnvioComponent } from './components/listar-envio/listar-envio.component';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { FiltroPipeEnvio } from '../pipe/filtro.pipe';


@NgModule({
  declarations: [
    ListarEnvioComponent,
    CrearEnvioComponent,
    EnvioComponent,
    FiltroPipeEnvio
  ],
  imports: [
    CommonModule,
    EnvioRoutingModule,
    SharedModule,
  ],
  providers: [EnvioService, UsuarioService]
})
export class EnvioModule { }
