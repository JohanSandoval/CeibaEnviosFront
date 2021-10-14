import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Envios';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'Home' },
    { url: '/producto', nombre: 'Producto' },
    { url: '/envio', nombre: 'Envio'},
    { url: '/usuario', nombre: 'Usuario'},
    { url: '/diasEspera', nombre: 'Dias Espera'},
    { url: '/costos', nombre: 'Costos Envio'},
    { url: '/ciudad', nombre: 'Ciudad'},
  ];
}
