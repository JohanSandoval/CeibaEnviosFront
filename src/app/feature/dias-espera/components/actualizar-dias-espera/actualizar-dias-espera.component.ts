import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudad } from '@ciudad/shared/model/ciudad';
import { CiudadService } from '@ciudad/shared/service/ciudad.service';
import { DiasEspera } from '@dias-espera/shared/model/dias-espera';
import { DiasEsperaService } from '@dias-espera/shared/service/dias-espera.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actualizar-dias-espera',
  templateUrl: './actualizar-dias-espera.component.html',
  styleUrls: ['./actualizar-dias-espera.component.css']
})
export class ActualizarDiasEsperaComponent implements OnInit {
  public listaCiudades : Observable<Ciudad[]>
  diasEspera : DiasEspera = new DiasEspera();

  constructor(protected ciudadService : CiudadService, private route: ActivatedRoute, protected diasEsperaService : DiasEsperaService, private router : Router) { }

  ngOnInit(): void {
    this.listarCiudad();
    this.optenerParametros();
  }


  actualizar(diasEsperaForm : NgForm){
    if(!diasEsperaForm){
      return false;
    }

    this.diasEsperaService.actualizar(this.diasEspera.id, this.diasEspera).subscribe(
      (response) => {
        response = this.diasEspera.id;
        alert('se a actualizado la Ruta ' + response) ;
        this.router.navigateByUrl("diasEspera/listarDiasEspera");
      },
      (err) => {
        alert('' + err.error.mensaje + ' con codigo de error ' + err.status);
      });
}

  listarCiudad(){
    this.listaCiudades = this.ciudadService.consultar();
  }

  optenerParametros(){
    this.route.queryParams.subscribe(params => {
      this.diasEspera.id = params.diasEsperaId,
      this.diasEspera.idCiudadO = params.diasEsperaCiudadO,
      this.diasEspera.idCiudadD = params.diasEsperaCiudadD,
      this.diasEspera.dias = params.diasEsperaDias
    })
  }

}
