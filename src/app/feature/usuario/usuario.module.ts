import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioService } from './shared/service/usuario.service';
import { CiudadService } from '@ciudad/shared/service/ciudad.service';
import { FiltroPipeUsuario } from '../pipe/filtro.pipe';




@NgModule({
  declarations: [
    ListarUsuarioComponent,
    ActualizarUsuarioComponent,
    CrearUsuarioComponent,
    UsuarioComponent,
    FiltroPipeUsuario
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuarioRoutingModule
  ],
  providers: [UsuarioService, CiudadService]
})
export class UsuarioModule { }
