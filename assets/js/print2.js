export function printDiv2(nombre, apellido, nacionalidad, edad, ciudad, pais, estudios, conocimientos, experiencias, cursos, idiomas, languageTexts, skills) {

    var a = window.open("", "", "height=1000, width=1000");
    a.document.write("<html><body>");

    //Encabezado
    a.document
        .write(`<div style="display: block; align-items: center; width:1000;"> <div style="display: flex;
          margin: 15px 5px;">`);
    a.document.write(
        '<img style="width: 120;" src="./assets/images/logo.png" alt="logo">'
    );
    a.document.write(
        '<h3 style="flex: 1; text-align: right; font-family: \'Franklin Gothic Medium Cond\'; font-size: 18px; color: #31DCFE !important; margin-right: 100px;">Curriculum Vitae</h3>'
    );
    a.document.write("</div>");
    a.document.write("</div>");

    //Datos Personales
    a.document.write('<div style="margin-top: 20px;">');
    a.document.write(`<div style="font-weight: bold; font-family: \'Mediator Serif Narrow Bold\'; font-size: 40px;"><label>${apellido} ${nombre}</label></div>`);
    a.document.write(`<div style="font-family: \'TilpSerif EF Bold Italic\'; font-size: 16px;"><label>${languageTexts.edad}: ${edad}</label></div>`);
    a.document.write(`<div style="font-family: \'TilpSerif EF Bold Italic\'; font-size: 16px;"><label>${languageTexts.nacionalidad}: ${nacionalidad}</label></div>`);
    a.document.write(`<div style="font-family: \'TilpSerif EF Bold Italic\'; font-size: 16px;"><label>${languageTexts.ciudad}: ${ciudad}</label></div>`);
    a.document.write(`<div style="font-family: \'TilpSerif EF Bold Italic\'; font-size: 16px;"><label>${languageTexts.pais}: ${pais}</label></div>`);
    a.document.write("</div>");

    //SEPARAMIENTO DEL PDF
    a.document.write(
        '<div style="display: flex; align-items: flex-start; width:100%;">'
    );

    // =========== 2 COLUMNAS ============
    a.document.write('<div style="display: flex; flex: 1;">');

    // =========== Columna 1 ============
    a.document.write('<div style="flex: 1; margin-right: 20px;">');

    // =========== 1. EXPERIENCIA LABORAL ============
    a.document.write(
        '<div style="display: flex; flex-direction: column;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; color: #3D5FEA !important; font-size: 20px; margin-top: 2%; ">' + languageTexts.experiencialab + '</label>'
    );
    a.document.write("</div>");

    function capitalizarPrimeraLetra(cadena) {
        return cadena.charAt(0).toUpperCase() + cadena.slice(1);
      }
    // Aquí debes añadir el código para mostrar la experiencia laboral
    experiencias.forEach(experiencia => {
        a.document.write('<div style="margin-top: 15px;">');
        a.document.write(`<p style="font-family: \'Mediator Serif Narrow Bold\', sans-serif; font-size: 18px; margin-bottom: 5px; color: black;"><strong>${experiencia.puesto}</strong> - <strong>${experiencia.empresa}</strong></p>`);

        // =========== Tiempo ============
        // Convertir las fechas a objetos de fecha JavaScript
    const fechaInicio = new Date(experiencia.fechaIni);
    const fechaFin = new Date(experiencia.fechaFin);

    // Obtener el mes y el año actual
    const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
    const añoActual = new Date().getFullYear();

    // Extraer el mes y el año de cada fecha
    const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
    const añoInicio = fechaInicio.getFullYear();
    let mesFin, añoFin;

    // Verificar si la fecha fin es igual al mes y año actuales
    if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
        mesFin = languageTexts.actualidad;
        añoFin = "";
    } else {
        mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
        añoFin = fechaFin.getFullYear();
    }

    // Construir la cadena de tiempo formateada
    const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

    a.document.write(`<p style="font-family: 'Tara SC Light', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${tiempoFormateado}</p>`);

        // a.document.write('<div style="font-family: \'Tanseek Traditional Medium\', sans-serif; font-size: 16px; margin-bottom: 10px; color: black;;"><ul style="list-style-type: disc; padding-left: 20px;">'); // Inicio de la lista
        // experiencia.actividades.forEach(function(actividad) {
        //     a.document.write(`<li>${actividad}</li>`); // Mostrar cada actividad como un elemento de lista
        // });
        // a.document.write('</ul></div>'); // Fin de la lista

        // a.document.write('<div style="font-family: \'Tanseek Traditional Medium\', sans-serif; font-size: 16px; margin-bottom: 10px; color: black;;"><ul style="list-style-type: disc; padding-left: 20px;">'); // Inicio de la lista
        // experiencia.funciones.forEach(function(funcion) {
        //     a.document.write(`<li>${funcion}</li>`); // Mostrar cada función como un elemento de lista
        // });
        // a.document.write('</ul></div>'); // Fin de la lista

        a.document.write('<div style="margin-top: 1px;">');
        a.document.write(`<p style="font-family: 'TilpSerif EF Bold Italic', sans-serif; font-size: 16px; margin-bottom: 2px; color: black; text-align: justify;">${experiencia.descripcion}</p>`);
        a.document.write("</div>");

        a.document.write("</div>"); // Cerrar el div de la experiencia laboral
    });
    a.document.write("</div>");

    // =========== 2. ESTUDIOS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; margin-top: 20px;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; color: #3D5FEA !important; font-size: 20px; margin-top: 2%; ">' + languageTexts.estudioscursados + '</label>'
    );
    a.document.write("</div>");

    estudios.forEach(estudio => {
        a.document.write('<div style="margin-top: 15px;">');
        a.document.write(`<p style="font-family: \'Mediator Serif Narrow Bold\', sans-serif; font-size: 18px; margin-bottom: 5px; color: black;"><strong>${estudio.universidad}</strong></strong></p>`);
        a.document.write(`<p style="font-family: \'TilpSerif EF Bold Italic\', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${estudio.carrera}</p>`);

        // =========== Tiempo ============
        // Convertir las fechas a objetos de fecha JavaScript
        const fechaInicio = new Date(estudio.fechaIni);
        const fechaFin = new Date(estudio.generacion);

        // Obtener el mes y el año actual
        const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
        const añoActual = new Date().getFullYear();

        // Extraer el mes y el año de cada fecha
    const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
    const añoInicio = fechaInicio.getFullYear();
    let mesFin, añoFin;

    // Verificar si la fecha fin es igual al mes y año actuales
    if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
        mesFin = languageTexts.actualidad;
        añoFin = "";
    } else {
        mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
        añoFin = fechaFin.getFullYear();
    }

    // Construir la cadena de tiempo formateada
    const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

        a.document.write(`<p style="font-family: \'Tara SC Light\', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${tiempoFormateado}</p>`);

        a.document.write("</div>"); // Cerrar el div del conocimiento
    });
    a.document.write("</div>");

    // Verificar si hay cursos antes de escribir el contenido
    if (cursos.length > 0) {
    // =========== 3. CURSOS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; margin-top: 20px;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; font-size: 20px; color: #3D5FEA !important;  margin-top: 2%; ">' + languageTexts.otrosEstudios + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar los cursos
    cursos.forEach(curso => {
        a.document.write('<div style="margin-top: 15px;">');
        a.document.write(`<p style="font-family: \'Mediator Serif Narrow Bold\', sans-serif; font-size: 18px; margin-bottom: 5px; color: black;"><strong>${curso.nombre}</strong></strong></p>`);
         // =========== Tiempo ============
        // Convertir las fechas a objetos de fecha JavaScript
        const fechaInicio = new Date(curso.fechaIni);
        const fechaFin = new Date(curso.fechaFin);

        // Obtener el mes y el año actual
        const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
        const añoActual = new Date().getFullYear();

        // Extraer el mes y el año de cada fecha
        const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
        const añoInicio = fechaInicio.getFullYear();
        let mesFin, añoFin;

        // Verificar si la fecha fin es igual al mes y año actuales
        if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
            mesFin = languageTexts.actualidad;
            añoFin = "";
        } else {
            mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
            añoFin = fechaFin.getFullYear();
        }

        // Construir la cadena de tiempo formateada
        const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

        a.document.write(`<p style="font-family: \'TilpSerif EF Bold Italic\', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${curso.organizacion}</p>`);

        a.document.write(`<p style="font-family: \'Tara SC Light\', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${tiempoFormateado}</p>`);
        a.document.write(`<p style="font-family: \'Tanseek Traditional Medium\', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${curso.entidad} - ${curso.tiempoEstudio}</p>`);
        a.document.write(`<p style="font-family: \'Tanseek Traditional Medium\', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${curso.descripcion}</p>`);

        a.document.write("</div>");
    });

    a.document.write("</div>");
}

    a.document.write("</div>");

    // =========== Columna 2 ============
    a.document.write('<div style="flex: 1;">');

    // =========== 4. CONOCIMIENTOS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%; margin-bottom: 10px;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; color: #3D5FEA !important; font-size: 20px; margin-top: 2%; ">' + languageTexts.conocimientotec + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar los conocimientos
    conocimientos.forEach(conocimiento => {
        a.document.write('<div style="margin-top: 0.5%; margin-bottom: 0.5%;">'); // Ajusta los márgenes superior e inferior
        a.document.write(`<p style="font-family: 'TilpSerif EF Bold Italic', sans-serif; font-size: 16px; margin: 0; color: black;">${conocimiento.conocimiento}</p>`); // Elimina margen inferior y superior
        a.document.write("</div>");
    });
    a.document.write("</div>");

    // =========== 4. skills ============
    if (skills.length > 0) {
      a.document.write(
        '<div style="display: flex; flex-direction: column;">'
      );
      a.document.write('<div style="display: flex; margin-top:3%; margin-bottom: 10px;">');
      a.document.write(
          '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; color: #3D5FEA !important; font-size: 20px; margin-top: 2%; ">' + languageTexts.skillEt + '</label>'
      );
      a.document.write("</div>");
      // Aquí debes añadir el código para mostrar los conocimientos
      skills.forEach(skills => {
          a.document.write('<div style="margin-top: 0.5%; margin-bottom: 0.5%;">'); // Ajusta los márgenes superior e inferior
          a.document.write(`<p style="font-family: 'TilpSerif EF Bold Italic', sans-serif; font-size: 16px; margin: 0; color: black;">${skills.skill}</p>`); // Elimina margen inferior y superior
          a.document.write("</div>");
      });
      a.document.write("</div>");
    }

    // =========== 5. IDIOMAS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; color: #3D5FEA !important; margin-top: 20px;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; font-size: 20px; margin-top: 2%; ">' + languageTexts.idiomas + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar los idiomas
    idiomas.forEach(idioma => {
        a.document.write('<div style="margin-top: 1px;">');
        a.document.write(`<p style="font-family: \'TilpSerif EF Bold Italic\', sans-serif; font-size: 16px; margin-bottom: 2px; color: black;">${idioma.idioma + ' - '+ idioma.nivel}</p>`);
        a.document.write("</div>");
    });
    a.document.write("</div>");

    a.document.write("</div>");

    a.document.write("</div>");

    a.document.write("</div>");
    a.document.write("</body></html>");

    a.document.close();
    setTimeout(function() {
        a.print();
    }, 1000);
}
