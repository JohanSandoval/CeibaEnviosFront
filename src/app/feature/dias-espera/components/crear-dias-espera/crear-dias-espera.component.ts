import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Ciudad } from '@ciudad/shared/model/ciudad';
import { CiudadService } from '@ciudad/shared/service/ciudad.service';
import { DiasEspera } from '@dias-espera/shared/model/dias-espera';
import { DiasEsperaService } from '@dias-espera/shared/service/dias-espera.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crear-dias-espera',
  templateUrl: './crear-dias-espera.component.html',
  styleUrls: ['./crear-dias-espera.component.css']
})
export class CrearDiasEsperaComponent implements OnInit {
  public listaCiudades : Observable<Ciudad[]>;

  diasEspera : DiasEspera = new DiasEspera();

  constructor(protected ciudadService : CiudadService, protected diasEsperaService : DiasEsperaService, private router : Router) { }

  ngOnInit(): void {
    this.listarCiudades();
  }

  crear(diasEsperaForm : NgForm){
    if(!diasEsperaForm){
      return false;
    }

    this.diasEsperaService.crear(this.diasEspera).subscribe(
      (response: any) =>{
        alert('se ha creado una ruta con el id: ' + response.valor);
        this.router.navigateByUrl("diasEspera/listarDiasEspera");
      },
      (err) =>{
        alert('' + err.error.mensaje + " con codigo de error: " + err.status);
      });
  }


  listarCiudades(){
    this.listaCiudades = this.ciudadService.consultar();
  }

}
