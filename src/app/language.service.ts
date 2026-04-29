import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface LanguageText {
  selectLanguage: string;
  menu: string;
  nombre: string;
  apellidos: string;
  nacionalidad: string;
  edad: string;
  ciudad: string;
  pais: string;
  obligatorio: string;
  actual: string;
  universidad: string;
  carrera: string;
  fechaIniU: string;
  fechaFinU: string;
  fechaActual: string;
  puesto: string;
  empresa: string;
  actividades: string;
  conocimiento: string;
  logros: string;
  funciones: string;
  formulario: string;
  generarDoc: string;
  guardarCono: string;
  guardarEstu: string;
  guardarExp: string;
  guardarOtro: string;
  guardarIdioma: string;
  eliminar: string;
  fechaInicio: string;
  fechaFin: string;
  organizacion: string;
  tiempodeEst: string;
  selectidioma: string;
  idioma: string;
  logroet: string;
  funcionet: string;
  descripcion: string;
  entidad: string;
  entidadet: string;
  cantidad: string;
  horas: string;
  meses: string;
  dias: string;
  year: string;
  apellidonombre: string;
  datospersonales: string;
  estudioscursados: string;
  generacion: string;
  actualidad: string;
  conocimientotec: string;
  experiencialab: string;
  fecha: string;
  otrosEstudios: string;
  comentarios: string;
  tiposcurso: string;
  estilos: string;
  estilo1: string;
  estilo2: string;
  idiomas: string;
  comentariotTitulo: string;
  indicaConocimiento: string;
  residenciaactual: string;
  indicaSkill: string;
  skill: string;
  guardarSkill: string;
  skillEt: string;
  lenguajeProgramacion: string;
  conocimiento5: string;
  conocimiento6: string;
  conocimiento7: string;
  indicacion: string;
  selectnivel: string;
  basico: string;
  intermedio: string;
  avanzado: string;
  descripcionAct: string,
  mesesArray: Array<any>,
  ingles: string,
  validar: string,
  agregarExp: string,
  alerta: string,
  validarGenerarL: string,
  validarGenerarR: string,
  cursosNav: string,
  experienciaNav: string,
  estudiosNav: string,
  datosNav: string,
  descripcionInd: string,
  bienvenido: string,
  tiempoExperiencia: string,
  tiempoExpEtiqueta: string,
  skills: {},
  careers: any,
  carreraselect: string,
  etiquetaBDP: string,
  conocimientoplaceholder: string,
  descripcionplaceholder: string,
  btnDescripcionLaboral: string,
  descripcionLaboralplaceholder: string,
  formatos:string,
  formato1:string,
  // formato2:string,
  // Agrega más claves y valores según sea necesario para otros elementos de la interfaz de usuario
}


interface LanguageTexts {
  [key: string]: LanguageText;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language: string  = '';
  languageTextsArray: any;
  private languageTexts: LanguageTexts = {
    en: {
      selectLanguage: 'Select language',
      menu: 'Menu',
      nombre: 'Name',
      apellidos: 'Last names',
      nacionalidad: 'Nationality',
      edad: 'Age',
      ciudad: 'Current city of residence',
      pais: 'Current country of residence',
      obligatorio: 'This field is required',
      actual: 'Current',
      universidad: 'University',
      carrera: 'Degree',
      fechaIniU: 'Select start date',
      fechaFinU: 'Select end date',
      fechaActual: 'Select date',
      puesto: 'Position',
      empresa: 'Enterprise',
      actividades: 'Activities',
      conocimiento: 'Knowledge',
      logros: 'List three (3) major accomplishments',
      funciones: 'Indicate three (3) main functions',
      formulario: 'Form',
      generarDoc: 'Generate Document',
      guardarCono: 'Save Knowledge',
      guardarEstu: 'Save University',
      guardarExp: 'Save Work Experience',
      guardarOtro: 'Save another study',
      guardarIdioma: 'Save Language',
      eliminar: 'Delete',
      fechaInicio: 'Start date',
      fechaFin: 'End date',
      organizacion: 'Organization',
      tiempodeEst: 'Study Time',
      selectidioma: 'Select language',
      idioma: 'Language',
      logroet: 'Accomplishments',
      funcionet: 'Functions',
      descripcion: 'Description',
      entidad: 'Enter entity where course',
      entidadet: 'Entity',
      cantidad: 'Amount of time',
      horas: 'Hours',
      meses: 'Months',
      dias: 'Days',
      year: 'Years',
      apellidonombre: 'Surname and first name',
      datospersonales: 'PERSONAL DATA',
      estudioscursados: 'STUDIES COMPLETED',
      generacion: 'Generation',
      actualidad: 'Currently',
      conocimientotec: 'TECHNICIAL KNOWHOW',
      experiencialab: 'WORK EXPERIENCE',
      fecha: 'Date',
      otrosEstudios: 'CERTIFICATIONS',
      comentarios: 'Description',
      tiposcurso: 'COURSES, DIPLOMA, MASTERS, DOCTORATE, CERTIFICATION',
      estilos: 'Document Design',
      estilo1: 'A column',
      estilo2: 'Two columns',
      idiomas: 'Languages',
      comentariotTitulo: 'NOTES OR COMMENTS',
      indicaConocimiento: 'Select the knowledge in the table (In the box) or enter a new knowledge (Type in the field)',
      residenciaactual: 'Current residence',
      indicaSkill: 'Select the skill in the table (In the box) or enter a new skill (Type in the field)',
      skill: 'Soft skill',
      guardarSkill: 'Save Soft Skill',
      skillEt: 'SOFT SKILLS',
      lenguajeProgramacion: 'Language of programming',
      conocimiento5: 'Vision Systems',
      conocimiento6: 'Drives / Protections',
      conocimiento7: 'Reading and Designing Electrical Drawings',
      indicacion: 'This form will generate a WORD document, please send it to the human resources staff.',
      selectnivel: 'Select language level',
      basico: 'Basic',
      intermedio: 'Intermediate',
      avanzado: 'Advanced',
      descripcionAct: 'Describe your activities',
      mesesArray: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      ingles: 'English',
      validar: 'Please complete all required fields.',
      agregarExp: 'Remember to add all your experiences so that your CV is complete',
      alerta: 'Alert',
      validarGenerarL: '',
      validarGenerarR: ' is empty',
      cursosNav: 'Courses',
      experienciaNav: 'Experience',
      estudiosNav: 'University',
      datosNav: 'Personal data',
      descripcionInd: 'Description (Please write in paragraph form)',
      bienvenido: 'Welcome',
      tiempoExperiencia: 'Years of professional experience',
      tiempoExpEtiqueta: 'Total years of professional experience to date',
      skills: {
        "1": "Effective Communication",
        "2": "Teamwork",
        "3": "Critical Thinking",
        "4": "Problem Solving",
        "5": "Adaptability",
        "6": "Time Management",
        "7": "Leadership",
        "8": "Attention to Detail",
        "9": "Decision Making",
        "10": "Proactivity"
      },
      careers: [
        { value: "Mechatronics Engineering", viewValue: "Mechatronics Engineering" },
        { value: "Automation and Control Engineering", viewValue: "Automation and Control Engineering" },
        { value: "Computer Systems Engineering", viewValue: "Computer Systems Engineering" },
        { value: "Software Engineering", viewValue: "Software Engineering" },
        { value: "Electronics Engineering", viewValue: "Electronics Engineering" },
        { value: "Robotics Engineering", viewValue: "Robotics Engineering" },
        { value: "Artificial Intelligence Engineering", viewValue: "Artificial Intelligence Engineering" },
        { value: "Computer Engineering", viewValue: "Computer Engineering" },
        { value: "Information Technology Engineering", viewValue: "Information Technology Engineering" },
        { value: "Instrumentation and Control Engineering", viewValue: "Instrumentation and Control Engineering" }
      ],
      carreraselect: "Select the career that best matches your profile or area of specialization",
      etiquetaBDP: "Database and programming",
      conocimientoplaceholder:"Write another skill",
      descripcionplaceholder:"Write a description that highlights the best of your experience",
      btnDescripcionLaboral: "Add a description",
      descripcionLaboralplaceholder: "Describe your duties, achievements, or responsibilities in this position",
      formatos:"Document format",
      formato1:"Format 1",
      // Agrega más claves y valores según sea necesario para otros elementos de la interfaz de usuario en inglés
    },
    es: {
      selectLanguage: 'Seleccionar idioma',
      menu: 'Menú',
      nombre: 'Nombre',
      apellidos: 'Apellidos',
      nacionalidad: 'Nacionalidad',
      edad: 'Edad',
      ciudad: 'Ciudad de residencia actual',
      pais: 'País de residencia actual',
      obligatorio: 'El campo es obligatorio',
      actual: 'Actual',
      universidad: 'Universidad',
      carrera: 'Carrera',
      fechaIniU: 'Seleccione fecha de inicio',
      fechaFinU: 'Seleccione fecha de fin',
      fechaActual: 'Seleccione fecha',
      puesto: 'Puesto',
      empresa: 'Empresa',
      actividades: 'Actividades',
      conocimiento: 'Conocimiento',
      logros: 'Indique tres (3) principales logros',
      funciones: 'Indique tres (3) principales funciones',
      formulario: 'Formulario',
      generarDoc: 'Generar documento',
      guardarCono: 'Guardar Conocimiento',
      guardarEstu: 'Guardar Estudio',
      guardarExp: 'Guardar Experiencia Laboral',
      guardarOtro: 'Guardar otro estudio',
      guardarIdioma: 'Guardar idioma',
      eliminar: 'Eliminar',
      fechaInicio: 'Fecha de inicio',
      fechaFin: 'Fecha de fin',
      organizacion: 'Organización',
      tiempodeEst: 'Tiempo de estudios',
      selectidioma: 'Selecciona el idioma',
      idioma: 'Idioma',
      logroet: 'Logros',
      funcionet: 'Funciones',
      descripcion: 'Descripción',
      entidad: 'Ingrese entidad en donde curso',
      entidadet: 'Entidad',
      cantidad: 'Cantidad de tiempo (Aproximado)',
      horas: 'Horas',
      meses: 'Meses',
      dias: 'Días',
      year: 'Años',
      apellidonombre: 'Apellido y nombre',
      datospersonales: 'DATOS PERSONALES',
      estudioscursados: 'ESTUDIOS CURSADOS',
      generacion: 'Generación',
      actualidad: 'Actualmente',
      conocimientotec: 'CONOCIMIENTO TECNICO',
      experiencialab: 'EXPERIENCIA LABORAL',
      fecha: 'Fecha',
      otrosEstudios: 'CERTIFICACIONES',
      comentarios: 'Descripción',
      tiposcurso: 'CURSOS, DIPLOMADO, MAESTRIA, DOCTORADO, CERTIFICACIÓN',
      estilos: 'Diseño del documento',
      estilo1: 'Una columna',
      estilo2: 'Dos columnas',
      idiomas: 'Idiomas',
      comentariotTitulo: 'NOTAS O COMENTARIOS',
      indicaConocimiento: 'Seleccione el conocimiento en la tabla (En la casilla) o ingrese un nuevo conocimiento (Escriba en el campo)',
      residenciaactual: 'Residencia actual',
      indicaSkill: 'Seleccione la habilidad en la tabla (En la casilla) o ingrese una nueva habilidad (Escriba en el campo)',
      skill: 'Habilidad blanda',
      guardarSkill: 'Guardar habilidad blanda',
      skillEt: 'HABILIDADES BLANDAS',
      lenguajeProgramacion: 'Lenguaje de programación',
      conocimiento5: 'Sistemas de vision',
      conocimiento6: 'Accionamientos / Protecciones',
      conocimiento7: 'Lectura y diseños de Planos Electricos',
      indicacion: 'En este formulario se generara un documento en WORD, favor de enviarlo al personal de recursos humanos.',
      selectnivel: 'Selecciona el nivel del idioma',
      basico: 'Básico',
      intermedio: 'Intermedio',
      avanzado: 'Avanzado',
      descripcionAct: 'Describa sus actividades',
      mesesArray: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      ingles: 'Inglés',
      validar: 'Por favor completa todos los campos obligatorios.',
      agregarExp: 'Recuerda agregar todas tus experiencias para que tu cv este completo',
      alerta: 'Alerta',
      validarGenerarL: 'La sección de ',
      validarGenerarR: ' está vacío',
      cursosNav: 'Cursos',
      experienciaNav: 'Experiencia',
      estudiosNav: 'Universidad',
      datosNav: 'Datos personales',
      descripcionInd: 'Descripción (Favor de escribirlo en forma de párrafos)',
      bienvenido: 'Bienvenido',
      tiempoExperiencia: 'Años de experiencia profesional',
      tiempoExpEtiqueta: 'Total de años de experiencia profesional a la fecha',
      skills: {
        "1": "Comunicación efectiva",
        "2": "Trabajo en equipo",
        "3": "Pensamiento crítico",
        "4": "Resolución de problemas",
        "5": "Adaptabilidad",
        "6": "Gestión del tiempo",
        "7": "Liderazgo",
        "8": "Atención al detalle",
        "9": "Toma de decisiones",
        "10": "Proactividad"
      },
      careers: [
        { value: "Ingeniería en Mecatrónica", viewValue: "Ingeniería en Mecatrónica" },
        { value: "Ingeniería en Automatización y Control", viewValue: "Ingeniería en Automatización y Control" },
        { value: "Ingeniería en Sistemas Computacionales", viewValue: "Ingeniería en Sistemas Computacionales" },
        { value: "Ingeniería en Software", viewValue: "Ingeniería en Software" },
        { value: "Ingeniería Electrónica", viewValue: "Ingeniería Electrónica" },
        { value: "Ingeniería en Robótica", viewValue: "Ingeniería en Robótica" },
        { value: "Ingeniería en Inteligencia Artificial", viewValue: "Ingeniería en Inteligencia Artificial" },
        { value: "Ingeniería en Computación", viewValue: "Ingeniería en Computación" },
        { value: "Ingeniería en Tecnologías de la Información", viewValue: "Ingeniería en Tecnologías de la Información" },
        { value: "Ingeniería en Instrumentación y Control", viewValue: "Ingeniería en Instrumentación y Control" }
      ],
      carreraselect: "Seleccione la carrera que más se acerque a su perfil o área de especialización",
      etiquetaBDP: "Base de datos y programación",
      conocimientoplaceholder:"Escribe otro conocimiento",
      descripcionplaceholder:"Escribe una descripción que resalte lo mejor de tu experiencia",
      btnDescripcionLaboral: "Agregar descripción",
      descripcionLaboralplaceholder: "Describe tus funciones, logros o responsabilidades en este puesto",
      formatos:"Formato del documento",
      formato1:"Formato 1"
    }
    // Agrega más idiomas según sea necesario
  };

  private _languageTextsSubject = new BehaviorSubject<LanguageText>(this.languageTexts.es);

  languageTexts$ = this._languageTextsSubject.asObservable();

  constructor() {}

  getLanguageTexts(language: string): LanguageText {
    this.language = language;
    return this.languageTexts[language] || this.languageTexts['en']; // Fallback al inglés si no se encuentra el idioma
  }

  updateLanguageTexts(language: string) {
    this.languageTextsArray = this.getLanguageTexts(language);
    this._languageTextsSubject.next(this.languageTextsArray);
  }
}
