import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarDiasEsperaComponent } from './components/actualizar-dias-espera/actualizar-dias-espera.component';
import { CrearDiasEsperaComponent } from './components/crear-dias-espera/crear-dias-espera.component';
import { DiasEsperaComponent } from './components/dias-espera/dias-espera.component';
import { ListarDiasEsperaComponent } from './components/listar-dias-espera/listar-dias-espera.component';

const routes: Routes = [{
  path:'',
  component: DiasEsperaComponent,
  children:[
    {
      path: 'crearDiasEspera',
      component: CrearDiasEsperaComponent
    },
    {
      path: 'listarDiasEspera',
      component: ListarDiasEsperaComponent
    },
    {
      path: 'actualizarDiasEspera',
      component: ActualizarDiasEsperaComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiasEsperaRoutingModule { }
