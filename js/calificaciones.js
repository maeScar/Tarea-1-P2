// Datos estudiantes
const estudiantes = [
    { nombre: "Pablo", calificaciones: [14, 16, 12] },
    { nombre: "Diderot", calificaciones: [18, 17, 19] },
    { nombre: "Jose", calificaciones: [10, 8, 9] },
    { nombre: "Andres", calificaciones: [15, 14, 16] },
    { nombre: "Paulina", calificaciones: [6, 5, 7] },
    { nombre: "Mayeli", calificaciones: [20, 19, 18] },
    { nombre: "Mayra", calificaciones: [11, 12, 10] },
    { nombre: "Esteban", calificaciones: [16, 15, 17] },
    { nombre: "Hirahiza", calificaciones: [9, 10, 8] },
    { nombre: "Javier", calificaciones: [13, 14, 15] }
];

// Agregar calificaciones a un estudiante
function agregarCalificacion(nombre, calificacion) {
    const estudiante = estudiantes.find(e => e.nombre === nombre);
    if (estudiante) {
        estudiante.calificaciones.push(calificacion);
    } else {
        console.log(`Estudiante ${nombre} no encontrado.`);
    }
}

// Calcular el promedio de un estudiante
function calcularPromedio(calificaciones) {
    const suma = calificaciones.reduce((acc, cal) => acc + cal, 0);
    return suma / calificaciones.length;
}

// Clasificar a un estudiante según su promedio
function clasificarEstudiante(promedio) {
    if (promedio >= 16) return "Excelente";
    if (promedio >= 12) return "Bueno";
    if (promedio >= 8) return "Aprobado";
    return "Reprobado";
}

// Calcular estadísticas y clasificaciones
function procesarEstudiantes() {
    let mejorPromedio = -Infinity;
    let peorPromedio = Infinity;
    let estudianteMejor = null;
    let estudiantePeor = null;

    estudiantes.forEach(estudiante => {
        const promedio = calcularPromedio(estudiante.calificaciones);
        const maxCal = Math.max(...estudiante.calificaciones);
        const minCal = Math.min(...estudiante.calificaciones);
        const clasificacion = clasificarEstudiante(promedio);

        estudiante.promedio = promedio;
        estudiante.maxCalificacion = maxCal;
        estudiante.minCalificacion = minCal;
        estudiante.clasificacion = clasificacion;

        if (promedio > mejorPromedio) {
            mejorPromedio = promedio;
            estudianteMejor = estudiante;
        }

        if (promedio < peorPromedio) {
            peorPromedio = promedio;
            estudiantePeor = estudiante;
        }
    });

    return {
        estudianteMejor,
        estudiantePeor
    };
}

// Imprimir los resultados
function imprimirResultados() {
    const { estudianteMejor, estudiantePeor } = procesarEstudiantes();

    console.log("Resultados de los estudiantes:");
    estudiantes.forEach(est => {
        console.log(`Nombre: ${est.nombre}`);
        console.log(`Calificaciones: ${est.calificaciones.join(", ")}`);
        console.log(`Promedio: ${est.promedio.toFixed(2)}`);
        console.log(`Máxima Calificación: ${est.maxCalificacion}`);
        console.log(`Mínima Calificación: ${est.minCalificacion}`);
        console.log(`Clasificación: ${est.clasificacion}`);
        console.log("---------------------------");
    });

    console.log(`Estudiante con el mejor promedio es ${estudianteMejor.nombre} con un promedio de ${estudianteMejor.promedio.toFixed(2)}`);
    console.log(`Estudiante con la peor promedio es ${estudiantePeor.nombre} con un promedio de ${estudiantePeor.promedio.toFixed(2)}`);
}

agregarCalificacion("Pablo", 17);
imprimirResultados();
