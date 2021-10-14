import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarCiudadComponent } from './components/actualizar-ciudad/actualizar-ciudad.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { CrearCiudadComponent } from './components/crear-ciudad/crear-ciudad.component';
import { ListarCiudadComponent } from './components/listar-ciudad/listar-ciudad.component';

const routes: Routes = [
  {
    path: '',
    component: CiudadComponent,
    children:[
      {
        path: 'crearCiudad',
        component: CrearCiudadComponent
      },
      {
        path: 'listarCiudad',
        component: ListarCiudadComponent
      },
      {
        path: 'actualizarCiudad',
        component: ActualizarCiudadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiudadRoutingModule { }
