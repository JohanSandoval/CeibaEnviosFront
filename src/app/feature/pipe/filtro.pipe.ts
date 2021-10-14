import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCiudad'
})
export class FiltroPipeCiudad implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length <3){
      return value
    }
    const resultCiudad = [];
    for(const ciudad of value){
      if(ciudad.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCiudad.push(ciudad);
      };
    };
    return resultCiudad;
  }

}



@Pipe({
  name: 'filtroDiasEspera'
})
export class FiltroPipeDiasEspera implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length <3){
      return value
    }
    const resultCiudad = [];
    for(const diasEspera of value){
      if(diasEspera.ciudadDestino.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCiudad.push(diasEspera);
      };
    };
    return resultCiudad;
  }

}


@Pipe({
  name: 'filtroUsuario'
})
export class FiltroPipeUsuario implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length <3){
      return value
    }
    const resultUsuario = [];
    for(const usuario of value){
      if(usuario.cedula.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuario.push(usuario);
      };
    };
    return resultUsuario;
  }

}


@Pipe({
  name: 'filtroEnvio'
})
export class FiltroPipeEnvio implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === null || arg.length <1){
      return value
    }
    const resultEnvio = [];
    for(const envio of value){
      console.log(arg);
      if(envio.id.toString().indexOf(arg) > -1){
        resultEnvio.push(envio);
      };
    };
    return resultEnvio;
  }
}

@Pipe({
  name: 'filtroRemitente'
})
export class FiltroPipeEnvioRemitente implements PipeTransform {

  transform(value: any, arg: any): any {   
    if(arg === "" || arg.length <3){
      return value
    }
    const resultRemitente = [];
    for(const remitente of value){
      console.log(arg);
      if(remitente.cedula.indexOf(arg) > -1){
        resultRemitente.push(remitente);
      };
    };
    return resultRemitente;
  }
}

@Pipe({
  name: 'filtroDestinatario'
})
export class FiltroPipeEnvioDestinatario implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === "" || arg.length <3){
      return value
    }
    const resultDestinatario = [];
    for(const destinatario of value){
      console.log(arg);
      if(destinatario.cedula.indexOf(arg) > -1){
        resultDestinatario.push(destinatario);
      };
    };
    return resultDestinatario;
  }
}
