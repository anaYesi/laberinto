var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];

var tablero = document.getElementById('tablero');
tablero.innerHTML = '';
    var tabla = document.createElement('table');//creando una tabla
    tabla.border = "1";
    for (var i = 0; i < mapa.length; i++) {
        var fila = document.createElement('tr');
        for (var j = 0; j < mapa[0].length; j++) {
            var celda = document.createElement('td');
            if (mapa[i][j] == "*") {
                celda.setAttribute('class', 'negro');
            }
            else if (mapa[i][j] == "o") {
                celda.setAttribute("class", "imgInicio");
            }
            else if (mapa[i][j] == "W") {
                celda.setAttribute("class", "imgFinal");
            }
            
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    tablero.appendChild(tabla);
var btnDerecha = document.getElementById('derecha');
btnDerecha.onclick = function () {

}