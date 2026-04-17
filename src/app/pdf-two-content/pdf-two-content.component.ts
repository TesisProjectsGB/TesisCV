import { Component, OnInit } from '@angular/core';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-pdf-two-content',
  templateUrl: './pdf-two-content.component.html',
  styleUrls: ['./pdf-two-content.component.scss']
})
export class PdfTwoContentComponent implements OnInit {
  selectedLanguage: string = 'es';
  languageTexts: any;

  apellido = '';
  nombre = '';
  nacionalidad = '';
  ciudad = '';
  pais = '';
  edad = 0;
  tiempoExperiencia = 0;
  estudios = [
    { universidad: 'UNAM', carrera: 'Ingeniería', fechaIni: new Date(2010, 1, 1), generacion: new Date(2014, 1, 1) }
  ];
  experiencias = [{puesto: 'UNAM', empresa: 'Ingeniería',descripciones:[], fechaIni: new Date(2010, 1, 1), fechaFin: new Date(2014, 1, 1)}];
  conocimientos = [ { conocimiento: 'Angular' } ];
  skills = [{ skill: 'Trabajo en equipo' }];
  cursos = [{ nombre: 'Ingeniería',organizacion:'',descripcion:'', fechaIni: new Date(2010, 1, 1), fechaFin: new Date(2014, 1, 1), entidad: '', tiempoEstudio: ''}]
  idiomas = [{idioma:'',nivel:''}]
  comentarios = '';

  constructor(private dataFormularioService: DataFormularioService,private languageService: LanguageService) {
    this.languageService.languageTexts$.subscribe(languageTexts => {
      this.languageTexts = languageTexts;
    });
    this.selectedLanguage = this.languageService.language;

    this.dataFormularioService.sendNombre$.subscribe({
      next: (nombre) => {
        this.nombre = nombre;
      }
    });

    this.dataFormularioService.sendApellidos$.subscribe({
      next: (apellido) => {
        this.apellido = apellido;
      }
    });

    this.dataFormularioService.sendNacionalidad$.subscribe({
      next: (nacionalidad) => {
        this.nacionalidad = nacionalidad;
      }
    });

    this.dataFormularioService.sendCiudad$.subscribe({
      next: (ciudad) => {
        this.ciudad = ciudad;
      }
    });

    this.dataFormularioService.sendEdad$.subscribe({
      next: (edad) => {
        this.edad = edad;
      }
    });

    this.dataFormularioService.sendTiempoExp$.subscribe({
      next: (tiempoExperiencia) => {
        this.tiempoExperiencia = tiempoExperiencia;
      }
    });

    this.dataFormularioService.sendConocimientos$.subscribe({
      next: (conocimientos) => {
        this.conocimientos = conocimientos;
      }
    });

    this.dataFormularioService.sendSkills$.subscribe({
      next: (skills) => {
        this.skills = skills;
      }
    });

    this.dataFormularioService.sendEstudios$.subscribe({
      next: (estudios) => {
        this.estudios = estudios;
      }
    });

    this.dataFormularioService.sendExperiencias$.subscribe({
      next: (experiencias) => {
        this.experiencias = experiencias;
      }
    });

    this.dataFormularioService.sendCursos$.subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      }
    });

    this.dataFormularioService.sendIdiomas$.subscribe({
      next: (idiomas) => {
        this.idiomas = idiomas;
      }
    });

    this.dataFormularioService.sendComentarios$.subscribe({
      next: (comentarios) => {
        this.comentarios = comentarios;
      }
    });

    this.dataFormularioService.sendPais$.subscribe({
      next: (pais) => {
        this.pais = pais;
      }
    });
  }

  ngOnInit(): void {

  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  capitalizeFirstLetter(text: Date): string {
    if (!text) {
      return ''; // Devuelve una cadena vacía si el texto es null o undefined
    }

    const monthIndex = text.getMonth(); // Obtiene el índice del mes (0-11)
    const year = text.getFullYear(); // Obtiene el año
    const month = this.languageTexts.mesesArray[monthIndex] || '';
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1); // Capitaliza la primera letra
    return `${capitalizedMonth} ${year}`;
  }

}
