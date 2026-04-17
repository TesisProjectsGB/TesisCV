import { Injectable } from '@angular/core';
// @ts-ignore
import * as Print from '../assets/js/print.js';
// @ts-ignore
import * as Print2 from '../assets/js/print2.js';
import { EstudioElement } from './models/estudios.interface';
import { PeriodicElement } from './models/experiencias.interface';
import { ConocimientoElement } from './models/conocimientos.interface';
import { SkillsElement } from './models/skills.interface';
import { IdiomasElement } from './models/idiomas.interface';
import { CursoElement } from './models/cursos.interface';
import { LanguageService } from './language.service';
import { Subscription } from 'rxjs';
import { Observable, Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataFormularioService {
  private readonly datosKey = 'datosFormulario';

  nombre: string = '';
  comentarios: string = '';
  apellidos: string = '';
  nacionalidad: string = '';
  edad: number = 18;
  tiempoExperiencia: number = 0;
  ciudad: string = '';
  pais: string = '';
  estudios: EstudioElement[] = [];
  conocimientos: ConocimientoElement[] = [];
  skills: SkillsElement[] = [];
  experiencias: PeriodicElement[] = [];
  cursos: CursoElement[] = [];
  idiomas: IdiomasElement[] = [];

  sendNombre$ = new BehaviorSubject<any>('');
  sendComentarios$ = new BehaviorSubject<any>('');
  sendApellidos$ = new BehaviorSubject<any>('');
  sendNacionalidad$ = new BehaviorSubject<any>('');
  sendEdad$ = new BehaviorSubject<any>('');
  sendTiempoExp$ = new BehaviorSubject<any>('');
  sendCiudad$ = new BehaviorSubject<any>('');
  sendPais$ = new BehaviorSubject<any>('');
  sendEstudios$ = new BehaviorSubject<any>([]);
  sendConocimientos$ = new BehaviorSubject<any>([]);
  sendSkills$ = new BehaviorSubject<any>([]);
  sendExperiencias$ = new BehaviorSubject<any>([]);
  sendCursos$ = new BehaviorSubject<any>([]);
  sendIdiomas$ = new BehaviorSubject<any>([]);

  // Variables para indicar si los arreglos tienen elementos
  tieneEstudios: boolean = false;
  tieneConocimientos: boolean = false;
  tieneExperiencias: boolean = false;
  tieneCursos: boolean = false;
  tieneIdiomas: boolean = false;
  tienePersonal: boolean = false;
  tieneSkills: boolean = false;
  tieneComentarios:boolean = false;
  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;

  constructor(private languageService: LanguageService) {
    this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
    this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
      this.languageTexts = languageTexts;
    });

    const datosGuardados = localStorage.getItem(this.datosKey);
    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);
      // Asignar los datos recuperados a las propiedades del servicio
      this.nombre = datos.nombre;
      this.apellidos = datos.apellidos;
      this.nacionalidad = datos.nacionalidad;
      this.edad = datos.edad;
      this.tiempoExperiencia = datos.tiempoExperiencia;
      this.ciudad = datos.ciudad;
      this.pais = datos.pais;
      this.estudios = datos.estudios;
      this.conocimientos = datos.conocimientos;
      this.experiencias = datos.experiencias;
      this.cursos = datos.cursos;
      this.idiomas = datos.idiomas;
      this.tieneEstudios = datos.tieneEstudios;
      this.tieneConocimientos = datos.tieneConocimientos;
      this.tieneExperiencias = datos.tieneExperiencias;
      this.tieneCursos = datos.tieneCursos;
      this.tieneIdiomas = datos.tieneIdiomas;
      this.tienePersonal = datos.tienePersonal;
      this.tieneComentarios=datos.comentarios;
    }
  }

  guardarDatos(comentarios: string, estilo: string) {
    this.comentarios = comentarios;
    this.sendComentarios$.next(this.comentarios);
    this.actualizarEstadoArreglos();
    // if(estilo === "Diseño de una columna"){
    //   Print.printDiv2(this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais, this.estudios, this.conocimientos,
    //     this.experiencias, this.cursos, this.idiomas, this.languageTexts, this.comentarios, this.skills);
    // } else {
    //   Print2.printDiv2(this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais, this.estudios, this.conocimientos,
    //     this.experiencias, this.cursos, this.idiomas, this.languageTexts, this.skills);
    // }

  }
  guardarComentarios(comentarios: string){
    this.comentarios = comentarios;
    this.sendComentarios$.next(this.comentarios);
    this.actualizarEstadoArreglos();
  }
  guardarPersonal(nombre: string, apellidos: string, nacionalidad: string, edad: number, ciudad: string, pais: string, tiempoExperiencia: number) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nacionalidad = nacionalidad;
    this.edad = edad;
    this.ciudad = ciudad;
    this.pais = pais;
    this.tiempoExperiencia = tiempoExperiencia;

    this.sendNombre$.next(nombre);
    this.sendNacionalidad$.next(nacionalidad);
    this.sendApellidos$.next(apellidos);
    this.sendEdad$.next(edad);
    this.sendCiudad$.next(ciudad);
    this.sendPais$.next(pais);
    this.sendTiempoExp$.next(tiempoExperiencia)
    this.actualizarEstadoArreglos();
  }

  guardarEstudios(estudios: EstudioElement[]) {
    this.estudios = estudios;
    this.sendEstudios$.next(estudios);
    this.actualizarEstadoArreglos();
  }

  guardarConocimientos(conocimientos: ConocimientoElement[]) {
    // Recorrer el arreglo recibido
    conocimientos.forEach((conocimiento) => {
      // Comprobar si el conocimiento no está ya en this.conocimientos
      if (!this.conocimientos.some((elem) => elem.conocimiento === conocimiento.conocimiento)) {
        // Si no está, agregarlo a this.conocimientos
        this.conocimientos.push(conocimiento);
      }
    });
    this.sendConocimientos$.next(this.conocimientos)
    // Actualizar el estado de los arreglos
    this.actualizarEstadoArreglos();
  }

  eliminarConocimientos(conocimientos: ConocimientoElement[]) {
    this.conocimientos = this.conocimientos.filter(conocimiento =>
      !conocimientos.some(elem => elem.conocimiento === conocimiento.conocimiento)
    );

    this.sendConocimientos$.next(this.conocimientos)
    // Actualizar el estado de los arreglos
    this.actualizarEstadoArreglos();
  }

  guardarSkills(skill: SkillsElement[]) {
    this.skills = skill;
    this.sendSkills$.next(this.skills)
    this.actualizarEstadoArreglos();
  }

  guardarIdioma(idiomas: IdiomasElement[]) {
    this.idiomas = idiomas;
    this.sendIdiomas$.next(this.idiomas)
    this.actualizarEstadoArreglos();
  }

  guardarExperiencias(experiencias: PeriodicElement[]) {
    this.experiencias = experiencias;
    this.sendExperiencias$.next(this.experiencias);
    this.actualizarEstadoArreglos();
  }

  guardarCursos(cursos: CursoElement[]) {
    this.cursos = cursos;
    this.sendCursos$.next(this.cursos)
    this.actualizarEstadoArreglos();
  }

  private actualizarEstadoArreglos() {
    this.tieneEstudios = this.estudios.length > 0;
    this.tieneConocimientos = this.conocimientos.length > 0;
    this.tieneExperiencias = this.experiencias.length > 0
    this.tieneCursos = this.cursos.length > 0;
    this.tieneIdiomas = this.idiomas.length > 0;
    this.tieneSkills = this.skills.length > 0;
    this.tieneComentarios= this.conocimientos?true:false;

    if(this.nombre != "" && this.apellidos != "" && this.nacionalidad != "" && this.ciudad != "" && this.pais != "" && this.edad > 0 && this.tiempoExperiencia > 0) {
      this.tienePersonal = true;
    } else {
      this.tienePersonal = false;
    }
  }

  obtenerHtmlPdf(estilo: string) {
    if(estilo === "Diseño de una columna"){
      return Print.generateCvHtml(this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais, this.estudios, this.conocimientos,
        this.experiencias, this.cursos, this.idiomas, this.languageTexts, this.comentarios, this.skills);
    } else {
      Print2.printDiv2(this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais, this.estudios, this.conocimientos,
        this.experiencias, this.cursos, this.idiomas, this.languageTexts, this.skills);
    }

  }

}
