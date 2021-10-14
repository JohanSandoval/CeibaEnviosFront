import { Component, OnInit } from '@angular/core';
import { Envio } from '@envio/shared/model/envio';
import { EnvioService } from '@envio/shared/service/envio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-envio',
  templateUrl: './listar-envio.component.html',
  styleUrls: ['./listar-envio.component.css']
})
export class ListarEnvioComponent implements OnInit {
  public listaEnvios: Observable<Envio[]>;
  filterEnvio = '';

  constructor(protected envioService: EnvioService) { }

  ngOnInit() {
    this.listaEnvios = this.envioService.consultar();
  }

  visualizar(envio : Envio){
    window.confirm("envio " +envio.id + " " + envio.destinatario.nombre +  " " + envio.remitente.nombre );
  }


}
