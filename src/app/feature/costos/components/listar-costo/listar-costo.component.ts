import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Costos } from '@costos/shared/model/costo';
import { CostoService } from '@costos/shared/service/costo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-costo',
  templateUrl: './listar-costo.component.html',
  styleUrls: ['./listar-costo.component.css']
})
export class ListarCostoComponent implements OnInit {
  public listaCostos: Observable<Costos[]>;
  filterCosto = '';

  constructor(protected costoService: CostoService, private router: Router) { }

  ngOnInit(): void {
    this.listarCosto();
  }

  actualizar(costo : Costos){
    console.log(costo.pesoMax);
    console.log("-----------");
    console.log(costo.pesoMin);
    
    
    
    alert("costo a actualizar con id: " + costo.id);
    this.router.navigate(['costos/actualizarCosto'],{
      queryParams: {
        costoId : costo.id,
        costoPesoMax : costo.pesoMin,
        costoPesoMin : costo.pesoMax,
        costoCosto : costo.costo
      }
    });
  }

  listarCosto(){
    this.listaCostos = this.costoService.consultar();
  }
}
