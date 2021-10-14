import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children:[
      {
        path: 'crearUsuario',
        component: CrearUsuarioComponent
      },
      {
        path: 'listarUsuario',
        component: ListarUsuarioComponent
      },
      {
        path: 'actualizarUsuario',
        component : ActualizarUsuarioComponent
      }
    ] 
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
