import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiasEsperaModule } from '@dias-espera/dias-espera.module';
import { listarDiasEspera } from '@dias-espera/shared/model/listarDiasEspera';
import { DiasEsperaService } from '@dias-espera/shared/service/dias-espera.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-dias-espera',
  templateUrl: './listar-dias-espera.component.html',
  styleUrls: ['./listar-dias-espera.component.css']
})
export class ListarDiasEsperaComponent implements OnInit {
  public listarDiasEspera: Observable<DiasEsperaModule[]>
  filterRuta = '';

  constructor(protected diasEsperaService: DiasEsperaService, private router: Router) { }

  ngOnInit(): void {
    this.listarDiasEspera = this.diasEsperaService.consultar();
  }

  actualizar(diasEspera : listarDiasEspera){
    alert("Ruta a actualizar: Origen " + diasEspera.ciudadOrigen.nombre + " a Destino " +  diasEspera.ciudadDestino.nombre)
    this.router.navigate(['diasEspera/actualizarDiasEspera'],{
      queryParams:{
        diasEsperaId : diasEspera.id,
        diasEsperaCiudadO : diasEspera.ciudadOrigen.id,
        diasEsperaCiudadD : diasEspera.ciudadDestino.id,
        diasEsperaDias : diasEspera.dias
      }
    });
  }

}
