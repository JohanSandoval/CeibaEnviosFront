export class Envio {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    ciudadOrigen: number;
    ciudadDestino: number;
    peso: number;
    costo: number;
    fechaEstimada: string;

    constructor( id: number, nombre: string, apellido: string, telefono: string,
        ciudadOrigen: number, ciudadDesrtino: number, peso: number, costo: number, fechaEstimada: string) {
        
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.ciudadOrigen = ciudadOrigen;
        this.ciudadDestino = ciudadDesrtino;
        this.peso = peso;
        this.costo = costo;
        this.fechaEstimada = fechaEstimada;
    }

   
}
