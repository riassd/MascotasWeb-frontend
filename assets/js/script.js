
document.getElementById("btnGuardar").addEventListener("click",function(){
    var nombre = document.getElementById('raza').value;
    var pesoEnKilos = parseInt(document.getElementById('peso').value);
    var imc = Math.round(pesoEnKilos *130);
    var respuesta = 'Hola, Tu perro de raza '+nombre+ ' necesita ' + imc + ' Kcal/dia por dia ';
    document.getElementById('info').innerHTML = respuesta;
});