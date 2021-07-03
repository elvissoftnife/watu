export interface Programa {
  id:          number;
  nombre:      string;
  descripcion: string;
  vacantes:    number;
  inscritos:   number;
  estado:      number;
  id_sede:     number;
  sede:        Sede;
}

export interface Sede {
  id:       number;
  nombre:   string;
  distrito: string;
  agencia:  Agencia;
}

export interface Agencia {
  id:             number;
  nombre_agencia: string;
}
export interface BodyCreateProgram {
  nombre: string,
  descripcion: string,
  vacantes: number,
  image: any 
}

