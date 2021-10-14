import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Costos } from "@costos/shared/model/costo";
import { CostoService } from "@costos/shared/service/costo.service";

@Component({
  selector: "app-crear-costo",
  templateUrl: "./crear-costo.component.html",
  styleUrls: ["./crear-costo.component.css"],
})
export class CrearCostoComponent implements OnInit {
  costo: Costos = new Costos();

  constructor(protected costosSerive: CostoService, private router: Router) {}

  ngOnInit(): void {}

  crear(costoForm: NgForm) {
    if (!costoForm) {
      return false;
    }

    this.costosSerive.crear(this.costo).subscribe(
      (response: any) => {
        alert("se ha creado el costo con id: " + response.valor);
        this.router.navigateByUrl("costos/listarCosto");
      },
      (err) => {
        alert("" + err.error.mensaje + " con codigo de error: " + err.status);
      }
    );
  }
}
