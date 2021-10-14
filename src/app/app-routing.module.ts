import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'envio', loadChildren: () => import('@envio/envio.module').then(mod => mod.EnvioModule) },
  { path: 'ciudad', loadChildren: () => import('@ciudad/ciudad.module').then(mod => mod.CiudadModule)},
  { path: 'diasEspera', loadChildren: () => import('@dias-espera/dias-espera.module').then(mod => mod.DiasEsperaModule)},
  { path: 'usuario', loadChildren: () => import('@usuario/usuario.module').then(mod => mod.UsuarioModule)},
  { path: 'costos', loadChildren: () => import('@costos/costos.module').then(mod => mod.CostosModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
