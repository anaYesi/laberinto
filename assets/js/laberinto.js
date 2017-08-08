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
var x, y;
var Amapa = [];
for (var i = 0; i < mapa.length; i++){
    Amapa[i]=[];
    for (var j = 0; j < mapa[0].length; j++){
        Amapa[i][j]=mapa[i][j];
    }
}

var tablero = document.getElementById('tablero');
function CrearMapa(Amapa){
    tablero.innerHTML = '';
    var tabla = document.createElement('table');//creando una tabla
    //tabla.border = "1";
    tabla.setAttribute("cellspacing","0")//une los bloques, los cuadraditos
    for (var i = 0; i < Amapa.length; i++) {
        var fila = document.createElement("tr");
        for (var j = 0; j < Amapa[0].length; j++) {
            var celda = document.createElement("td");
            if (Amapa[i][j] == "*") {
                celda.setAttribute("class", "negro");
            }
            else if (Amapa[i][j] == "_") {
                celda.setAttribute("class", "amarillo");
            }
            else if (Amapa[i][j] == "o") {
                x = j;//para que se mueva o en el eje x
                y = i;
                celda.setAttribute("class", "imgInicio");
                celda.style.backgroundColor = "#BE61B6";
            }
            else if (Amapa[i][j] == "W") {
                celda.setAttribute("class", "imgFinal");
            }
                
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    tablero.appendChild(tabla);
}
CrearMapa(Amapa);

var btnAdelante = document.getElementById('adelante');
btnAdelante.onclick=function(){
    if (Amapa[y-1][x]!='*') {
        Amapa[y][x]='_';
        y-=1;
        Amapa[y][x]='o';
        CrearMapa(Amapa);
        

    }
}

var btnDerecha = document.getElementById('derecha');
btnDerecha.onclick = function(){
    if (Amapa[y][x+1]!='*') {
        Amapa[y][x]='_';
        x+=1;
        Amapa[y][x]='o';
        CrearMapa(Amapa);
    }
}

var btnIzquierda = document.getElementById('izquierda');
btnIzquierda.onclick = function(){
    if (Amapa[y][x-1]!='*') {
        Amapa[y][x]='_';
        x-=1;
        Amapa[y][x]='o';
        CrearMapa(Amapa);
    }
}

var btnSalida = document.getElementById('salida');
btnSalida.onclick = function(){
    if (Amapa[y+1][x]!='*') {
        Amapa[y][x]='_';
        y+=1;
        Amapa[y][x]='o';
        CrearMapa(Amapa);
    }

}
var btnAbajo = document.getElementById('abajo');
btnAbajo.onclick = function(){
    if (Amapa[y+1][x]!='*') {
        Amapa[y][x]='_';
        y+=1;
        Amapa[y][x]='o';
        generarMapa(Amapa);
  }
}