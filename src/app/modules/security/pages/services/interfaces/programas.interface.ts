export interface Program {
  id: number;
  nombre: string;
  descripcion: string;
  sede: {
    id: string;
    agencia: {
      id: number,
      image: string,
      nombre_agencia: string,
    }
  }
}

export interface BodyProgram {
id_sede?: number;
id_agencia?: number;
}

export interface ParamsPrograms {
programa: string,
body: BodyProgram,
}

export interface Agency {
id: number,
nombre_agencia: string,
acronimo_agencia: string,
url: string,
image: string,
descripcion: string,
fecha_inscripcion: string,
fecha_fin_inscripcion: string,
estado: number,
id_plan: number,
}

export interface Sede {
id: number,
nombre: string,
distrito: string,
direccion: string,
image: string,
contactame: number,
estado: number,
id_agencia: number
}