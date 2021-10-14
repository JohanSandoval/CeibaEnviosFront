import { Usuario } from "@usuario/shared/model/usuario";

export class Envio {
    id: number;
    remitente: Usuario;
    destinatario: Usuario;
    peso: number;
    costo: number;
    fechaEstimadaLLegada: string;
    direccion: string;
    
}
