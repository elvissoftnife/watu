export interface Inscripcion {
    id:            number;
    estado:        number;
    fecha_reserva: Date;
    usuario:       Usuario;
    programa:      Programa;
}

export interface Programa {
    id:          number;
    nombre:      string;
    descripcion: string;
    sede:        Sede;
}

export interface Sede {
    id:      number;
    nombre:  string;
    agencia: Agencia;
}

export interface Agencia {
    id:             number;
    nombre_agencia: string;
    image:          string;
}

export interface Usuario {
    id:               number;
    nombre:           string;
    apellido_paterno: string;
    apellido_materno: string;
    email:            string;
}
