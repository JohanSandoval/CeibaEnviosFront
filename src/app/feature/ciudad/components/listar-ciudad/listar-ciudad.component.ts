import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from '@ciudad/shared/model/ciudad';
import { CiudadService } from '@ciudad/shared/service/ciudad.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-ciudad',
  templateUrl: './listar-ciudad.component.html',
  styleUrls: ['./listar-ciudad.component.css']
})
export class ListarCiudadComponent implements OnInit {
  public listaCiudades: Observable<Ciudad[]>;
  filterCiudad = '';

  constructor(protected ciudadService: CiudadService, private router : Router) { }

  ngOnInit(): void {
    this.listaCiudades = this.ciudadService.consultar();
  }

  
  actualizar(ciudad : Ciudad ){
    alert("ciudad a actualizar con id: " + ciudad.id);
    this.router.navigate(['ciudad/actualizarCiudad'], {
      queryParams: {
        ciudadId : ciudad.id,
        ciudadNombre : ciudad.nombre
      },
    });

  }

}
