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
var celdas =new Array(mapa.length);

var tablero = document.getElementById('tablero');
function CrearMapa(mapa){
    tablero.innerHTML = '';
    var tabla = document.createElement('table');//creando una tabla
    //tabla.border = "1";
    tabla.setAttribute("cellspacing","0")//une los bloques, los cuadraditos
    var d=0;
    for (var i = 0; i < mapa.length; i++) {
        var fila = document.createElement("tr");
        var f=[];
        for (var j = 0; j < mapa[0].length; j++) {
            var celda = document.createElement("td");

            //celda.id ;

            if (mapa[i][j] == "*") {
                celda.setAttribute("class", "negro");
            }
            else if (mapa[i][j] == "_") {
                celda.setAttribute("class", "amarillo");
                //celda.class = "amarillo"
            }
            else if (mapa[i][j] == "o") {
                //agrega u hijo a un padre en este caso es la celda
                var img = document.createElement("img");
                img.src = "assets/imagenes/inicio.png";//extencion de la imagen

                celda.setAttribute("class", "imgInicio");
                celda.style.backgroundColor = "#BE61B6";
                celda.appendChild(img);//poniendo un hijo a la celda

                x = j;//para que se mueva o en el eje x
                y = i;
                console.log("x "+x);
                console.log("y "+y);
                //console.log("amapan "+mapa[i][j]);

            }
            else if (mapa[i][j] == "W") {
                celda.setAttribute("class", "imgFinal");
            }
                
            fila.appendChild(celda);
            f.push(celda);
        }
        tabla.appendChild(fila);
        celdas[i]=f;
    }
    tablero.appendChild(tabla);
    //console.log(celdas[1][1])
}
CrearMapa(mapa);

var btnAdelante = document.getElementById('adelante');
btnAdelante.onclick=function(){
     if (mapa[x-1][y] == '_') {


    }
}

var btnDerecha = document.getElementById('derecha');
btnDerecha.onclick = function(){

    if (mapa[y][x+1] == '_') {
        x=x+1;
        CrearMapa(mapa);
        
    }
}

var btnIzquierda = document.getElementById('izquierda');
btnIzquierda.onclick = function(){
    if (Amapa[y][x-1] =='_') {
        x=x-1;
        CrearMapa(Amapa);
    }
}

