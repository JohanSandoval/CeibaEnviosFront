import { Component, OnInit } from '@angular/core';
import { Ciudad } from '@ciudad/shared/model/ciudad';
import { Envio } from '@envio/shared/model/envio';
import { EnvioService } from '@envio/shared/service/envio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { listarUsuario } from '@usuario/shared/model/listarUsuarios';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listar-envio',
  templateUrl: './listar-envio.component.html',
  styleUrls: ['./listar-envio.component.css']
})
export class ListarEnvioComponent implements OnInit {
  public listaEnvios: Observable<Envio[]>;
  envio : Envio;
  remitente : listarUsuario;
  ciudadRemite : Ciudad;
  destinatario : listarUsuario;
  ciudadDesti : Ciudad;
  filterEnvio = '';

  constructor(private modal : NgbModal, protected envioService: EnvioService) { }

  ngOnInit() {
    this.listaEnvios = this.envioService.consultar();
  }

  visualizar(envio : Envio){
    window.confirm("envio " +envio.id + " " + envio.destinatario.nombre +  " " + envio.remitente.nombre );
  }

  openModal(envioModal, item){
    
    this.ciudadRemite = new Ciudad();
    this.ciudadRemite.id = item.remitente.ciudad.id;
    this.ciudadRemite.nombre = item.remitente.ciudad.nombre;

    this.remitente = new listarUsuario();
    this.remitente.id = item.remitente.id;
    this.remitente.cedula = item.remitente.cedula;
    this.remitente.nombre = item.remitente.nombre;
    this.remitente.apellido = item.remitente.apellido;
    this.remitente.ciudad = this.ciudadRemite;
    this.remitente.telefono = item.remitente.telefono;
    
    
    this.ciudadDesti = new Ciudad();
    this.ciudadDesti.id = item.destinatario.ciudad.id;
    this.ciudadDesti.nombre = item.destinatario.ciudad.nombre;

    this.destinatario = new listarUsuario();
    this.destinatario.id = item.destinatario.id;
    this.destinatario.cedula = item.destinatario.cedula;
    this.destinatario.nombre = item.destinatario.nombre;
    this.destinatario.apellido = item.destinatario.apellido;
    this.destinatario.ciudad = this.ciudadDesti;
    this.destinatario.telefono = item.destinatario.telefono;
    
    
    this.envio = new Envio();
    this.envio.id = item.id;
    this.envio.remitente = this.remitente;
    this.envio.destinatario = this.destinatario;
    this.envio.peso = item.peso;
    this.envio.costo = item.costo;
    this.envio.fechaEstimadaLLegada = item.fechaEstimadaLlegada;
    this.envio.direccion = item.direccion;
    this.modal.open(envioModal);
  };
}
