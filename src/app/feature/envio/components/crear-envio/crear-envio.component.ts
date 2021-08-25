import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { EnvioGuardar } from "@envio/shared/model/envioGuardar";
import { EnvioService } from "@envio/shared/service/envio.service";

@Component({
  selector: "app-crear-envio",
  templateUrl: "./crear-envio.component.html",
  styleUrls: ["./crear-envio.component.css"],
})
export class CrearEnvioComponent implements OnInit {
  /*nombre: string = "";
  apellido: string = "";
  telefono: string = "";
  ciudadOrigen: number = 0;
  ciudadDestino: number = 0;
  peso: number = 0;
    
  envioGuardar = new EnvioGuardar(this.nombre, this.apellido, this.telefono, this.ciudadOrigen, this.ciudadDestino, this.peso);*/

  envioGuardar: EnvioGuardar = new EnvioGuardar();

  constructor(private router: Router, protected envioServices: EnvioService) {}

  ngOnInit(): void {}

  guardar(envioform: NgForm) {
    Number(this.envioGuardar.ciudadOrigen);
    Number(this.envioGuardar.ciudadDestino);
    console.log(envioform);
    console.log(this.envioGuardar);
    if (!envioform.valid) {
      return false;
    }
    this.envioServices.guardar(this.envioGuardar).subscribe(
      (response: any) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cancelar() {
    alert("se ha cancelado la creacion del envio");
    this.router.navigateByUrl("envio/listarEnvios");
  }
}
