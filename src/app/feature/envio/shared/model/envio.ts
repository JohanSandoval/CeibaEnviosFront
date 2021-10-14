import { listarUsuario } from "@usuario/shared/model/listarUsuarios";

export class Envio {
    id: number;
    remitente: listarUsuario;
    destinatario: listarUsuario;
    peso: number;
    costo: number;
    fechaEstimadaLLegada: string;
    direccion: string;
    
}
