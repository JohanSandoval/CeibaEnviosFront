import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Costos } from "@costos/shared/model/costo";
import { CostoService } from "@costos/shared/service/costo.service";

@Component({
  selector: "app-actualiza-costo",
  templateUrl: "./actualiza-costo.component.html",
  styleUrls: ["./actualiza-costo.component.css"],
})
export class ActualizaCostoComponent implements OnInit {
  costo: Costos = new Costos();

  constructor(private route: ActivatedRoute, protected costoService: CostoService, private router: Router) {}

  ngOnInit(): void {
    this.optenerParametros();
  }

  actualizar(costoForm: NgForm) {
    if (!costoForm) {
      return false;
    }
      
    this.costoService.actualizar(this.costo.id, this.costo).subscribe(
      (response) => {
        response = this.costo.id;
        alert('se ha actualizardo el costo: ' + response);
        this.router.navigateByUrl("costos/listarCosto");
      },
      (err) => {
        alert('' + err.error.mensaje + 'con codigo de error: ' + err.status);
      });
  }

  optenerParametros() {
    this.route.queryParams.subscribe((params) => {
      (this.costo.id = params.costoId),
        (this.costo.pesoMax = params.costoPesoMax),
        (this.costo.pesoMin = params.costoPesoMin),
        (this.costo.costo = params.costoCosto);
    });
  }
}
