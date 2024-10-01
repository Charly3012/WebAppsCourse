async function consultarDivisa() {
    let divisaOrigen = document.getElementById('divisaEntrada').value;
    let divisaDestino = document.getElementById('divisaSalida').value;
    let cantidad = document.getElementById('entrada').value;

    

    let url = `https://v6.exchangerate-api.com/v6/0a61c98eefa7f967ba72a130/latest/${divisaOrigen}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.result === 'success') {
            let tasaCambio = data.conversion_rates[divisaDestino];
            let resultado = cantidad * tasaCambio;
            document.getElementById('salida').value = resultado.toFixed(2);
        } else {
            alert('Error al obtener las tasas de cambio');
        }
    } catch (error) {
        console.error('Error al consultar la API:', error);
    }
}