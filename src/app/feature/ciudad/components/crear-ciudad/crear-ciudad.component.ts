import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Ciudad } from "@ciudad/shared/model/ciudad";
import { CiudadService } from "@ciudad/shared/service/ciudad.service";

@Component({
  selector: "app-crear-ciudad",
  templateUrl: "./crear-ciudad.component.html",
  styleUrls: ["./crear-ciudad.component.css"],
})
export class CrearCiudadComponent implements OnInit {
  ciudad: Ciudad = new Ciudad();

  constructor(
    private router: Router,
    protected ciudadService: CiudadService,
    protected route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  crear(ciudadForm: NgForm) {
    if (!ciudadForm) {
      return false;
    }
    
    this.ciudad.nombre = this.ciudad.nombre.toUpperCase();
    this.ciudad.nombre = this.ciudad.nombre
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    this.ciudadService.crear(this.ciudad).subscribe(
      (response: any) => {
        alert("se ha creado la ciudad con el id: " + response.valor);
        this.router.navigateByUrl("ciudad/listarCiudad");
      },
      (err) => {
        alert("" + err.error.mensaje + "con codigo de error: " + err.status);
      });
  }
}
