import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudad } from '@ciudad/shared/model/ciudad';
import { CiudadService } from '@ciudad/shared/service/ciudad.service';

@Component({
  selector: 'app-actualizar-ciudad',
  templateUrl: './actualizar-ciudad.component.html',
  styleUrls: ['./actualizar-ciudad.component.css']
})
export class ActualizarCiudadComponent implements OnInit {
  ciudad : Ciudad = new Ciudad();
  

  constructor(private router: Router, protected ciudadService: CiudadService, protected route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{     
      this.ciudad.id = params.ciudadId;
      this.ciudad.nombre = params.ciudadNombre;
    });
  }
 

  actualizar(ciudadForm : NgForm){
    if(!ciudadForm){
      return false;
    }
    this.ciudad.nombre = this.ciudad.nombre.toUpperCase();
    this.ciudad.nombre = this.ciudad.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    this.ciudadService.actualizar(this.ciudad.id, this.ciudad).subscribe(
      (response) => {
        response = this.ciudad.nombre;
       alert('se ha actualizado la cuidad ' + response);
        this.router.navigateByUrl("ciudad/listarCiudad"); 
      },
      (err) => {
        alert('' + err.error.mensaje + 'con codigo de error: ' + err.status);
      });
  }
}

