import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvioRoutingModule } from './envio-routing.module';
import { ListarEnvioComponent } from './components/listar-envio/listar-envio.component';
import { CrearEnvioComponent } from './components/crear-envio/crear-envio.component';
import { EnvioComponent } from './components/envio/envio.component';
import { EnvioService } from './shared/service/envio.service';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ListarEnvioComponent,
    CrearEnvioComponent,
    EnvioComponent
  ],
  imports: [
    CommonModule,
    EnvioRoutingModule,
    SharedModule
  ],
  providers: [EnvioService]
})
export class EnvioModule { }
