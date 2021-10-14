import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { EnvioGuardar } from "@envio/shared/model/envioGuardar";
import { EnvioService } from "@envio/shared/service/envio.service";
import { listarUsuario } from "@usuario/shared/model/listarUsuarios";
import { Usuario } from "@usuario/shared/model/usuario";
import { UsuarioService } from "@usuario/shared/service/usuario.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-crear-envio",
  templateUrl: "./crear-envio.component.html",
  styleUrls: ["./crear-envio.component.css"],
})
export class CrearEnvioComponent implements OnInit {
  listaDeUsuarios : Observable<listarUsuario[]>;
  filterRemitente = '';
  filterDestinatario = '';

  envioGuardar: EnvioGuardar = new EnvioGuardar();

  remitente : Usuario = new Usuario();
  destinataio : listarUsuario = new listarUsuario();
  

  constructor(private router: Router, protected envioServices: EnvioService, protected usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  guardar(envioform: NgForm) {

    if(!envioform){
      return false
    }

    alert(this.envioGuardar.cedulaRemitente);
    /*
    this.envioServices.guardar(this.envioGuardar).subscribe(
      (response: any) => {
        alert("se ha creado el envio con el id: " + response.valor);
        this.router.navigateByUrl("envio/listarEnvios");
      },
      (err) => {
        alert(" " + err.error.mensaje + " con codigo de error: " + err.status);
      });*/
  }

  listarUsuarios(){
    this.listaDeUsuarios = this.usuarioService.consultar();
  }
  
  cancelar() {
    this.router.navigateByUrl("envio/listarEnvios");
  }
  
  optenerParametrosR(item){
    this.remitente.cedula = item.cedula;
    this.remitente.nombre = item.nombre; 
    this.remitente.apellido = item.apellido;
    this.remitente.ciudad = item.ciudad.nombre;
    this.remitente.telefono = item.telefono;
  }
  optenerParametrosD(item){
    this.destinataio.cedula = item.cedula;
    this.destinataio.nombre = item.nombre; 
    this.destinataio.apellido = item.apellido;
    this.destinataio.ciudad = item.ciudad.nombre;
    this.destinataio.telefono = item.telefono;

  }
  crearNuevoUsuario(){
    this.router.navigateByUrl("/usuario/crearUsuario");
  }

}
