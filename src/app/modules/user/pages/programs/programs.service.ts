import { Injectable } from '@angular/core';
import { Program } from './interfaces/programas.interface';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  private _programs: Program[] = [
    //programs: Program[] = [
      {
          titulo: "Nombre Programa",
          descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
          urlImagen: "assets/imgs/program.png"
      },
      {
        titulo: "Nombre Programa",
        descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
        urlImagen: "assets/imgs/program.png"
      },
      {
        titulo: "Nombre Programa",
        descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
        urlImagen: "assets/imgs/program.png"
      },
      {
        titulo: "Nombre Programa",
        descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
        urlImagen: "assets/imgs/program.png"
      },
      {
        titulo: "Nombre Programa",
        descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
        urlImagen: "assets/imgs/program.png"
      },
      {
        titulo: "Nombre Programa",
        descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
        urlImagen: "assets/imgs/program.png"
      },
      {
        titulo: "Nombre Programa",
        descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
        urlImagen: "assets/imgs/program.png"
      },
      {
        titulo: "Nombre Programa",
        descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
        urlImagen: "assets/imgs/program.png"
      },
      {
        titulo: "Nombre Programa",
        descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
        urlImagen: "assets/imgs/program.png"
      },
    ]
  
    get programs(): Program[]{
      return [...this._programs];
    }

  constructor() { }
}
