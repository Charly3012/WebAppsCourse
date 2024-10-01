
function calcular(){
    let operacion = document.getElementById('operacion').value;
    let operando = document.getElementById('operando').value;
    let operador = document.getElementById('operador').value;
    let resultado; 

    operando = parseFloat(operando);
    operador = parseFloat(operador);

    if(operacion == "sum"){
        resultado = operando + operador;
        
    }else if(operacion == "res"){
        resultado = operando - operador;
    }else if(operacion == "mul"){
        resultado = operando * operador;
    }
    else if(operacion == "div"){
        resultado = operando / operador;
    }
    else if(operacion == "pot"){
        resultado = Math.pow(operando, operador);
    }else{
        resultado = "No se como le hiciste pero lo rompiste"
    }

    document.getElementById('resultado').value = resultado;
}