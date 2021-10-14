import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaCostoComponent } from './components/actualiza-costo/actualiza-costo.component';
import { CostoComponent } from './components/costo/costo.component';
import { CrearCostoComponent } from './components/crear-costo/crear-costo.component';
import { ListarCostoComponent } from './components/listar-costo/listar-costo.component';

const routes: Routes = [
  {
    path: '',
    component: CostoComponent,
    children:[
      {
        path: 'crearCosto',
        component: CrearCostoComponent
      },
      {
        path: 'listarCosto',
        component: ListarCostoComponent
      },
      {
        path: 'actualizarCosto',
        component: ActualizaCostoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostosRoutingModule { }
