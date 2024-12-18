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

// Función para formatear decimales
function formatearDecimal(numero) {
    return new Intl.NumberFormat("es-ES", { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    }).format(numero);
}

// Función para unir elementos de un array
function unirElementos(array, separador = ", ") {
    let resultado = "";
    for (let i = 0; i < array.length; i++) {
        resultado += array[i];
        if (i < array.length - 1) {
            resultado += separador;
        }
    }
    return resultado;
}

// Agregar calificaciones a un estudiante
function agregarCalificacion(nombre, calificacion) {
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nombre === nombre) {
            estudiantes[i].calificaciones.push(calificacion);
            return;
        }
    }
    console.log(`Estudiante ${nombre} no encontrado.`);
}

// Calcular el promedio de un estudiante
function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
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

    for (let i = 0; i < estudiantes.length; i++) {
        const estudiante = estudiantes[i];
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
    }

    return {
        estudianteMejor,
        estudiantePeor
    };
}

// Imprimir los resultados
function imprimirResultados() {
    const { estudianteMejor, estudiantePeor } = procesarEstudiantes();

    console.log("Resultados de los estudiantes:");
    for (let i = 0; i < estudiantes.length; i++) {
        const est = estudiantes[i];
        console.log(`Nombre: ${est.nombre}`);
        console.log(`Calificaciones: ${unirElementos(est.calificaciones)}`);
        console.log(`Promedio: ${formatearDecimal(est.promedio)}`);
        console.log(`Máxima Calificación: ${est.maxCalificacion}`);
        console.log(`Mínima Calificación: ${est.minCalificacion}`);
        console.log(`Clasificación: ${est.clasificacion}`);
        console.log("---------------------------");
    }

    console.log(`Estudiante con el mejor promedio es ${estudianteMejor.nombre} con un promedio de ${formatearDecimal(estudianteMejor.promedio)}`);
    console.log(`Estudiante con la peor promedio es ${estudiantePeor.nombre} con un promedio de ${formatearDecimal(estudiantePeor.promedio)}`);
}

// Ejecutar el código
agregarCalificacion("Pablo", 17);
imprimirResultados();
