//Diccionario para convertir el día de la semana a string
const dias = new Map();
dias.set(1, "Lunes");
dias.set(2, "Martes");
dias.set(3, "Miercoles");
dias.set(4, "Jueves");
dias.set(5, "Viernes");
dias.set(6, "Sabado");
dias.set(7, "Domingo");

const meses = new Map();
meses.set(1, "Enero");
meses.set(2, "Febrero");
meses.set(3, "Marzo");
meses.set(4, "Abril");
meses.set(5, "Mayo");
meses.set(6, "Junio");
meses.set(7, "Julio");
meses.set(8, "Agosto");
meses.set(9, "Septiembre");
meses.set(10, "Octubre");
meses.set(11, "Noviembre");
meses.set(12, "Diciembre");


document.addEventListener("DOMContentLoaded", function() {

    function actualizarFechaYHora() {
        let fechaActual = new Date();

        let diaSemana = fechaActual.getDay();
        let dia = fechaActual.getDate();
        let mes = fechaActual.getMonth();
        let anio = fechaActual.getFullYear();
        let horas = fechaActual.getHours();
        let minutos = fechaActual.getMinutes();
        let segundos = fechaActual.getSeconds();

        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;

        let fechaString = "Es " + dias.get(diaSemana) + " " + dia + " de " + meses.get(mes) + " del año " + anio;
        let horaString = horas + " : " + minutos + " : " + segundos;

        document.getElementById("fecha").textContent = fechaString;
        document.getElementById("hora").textContent = horaString;
    }

    actualizarFechaYHora();

    setInterval(actualizarFechaYHora, 1000);
});



