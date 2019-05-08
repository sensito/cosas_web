var texto = document.getElementById("txt_lineas");
var boton = document.getElementById("boton_lineas");

boton.addEventListener("click", dibujo_por_clik);

var d = document.getElementById("Dibujo");
var lienzo = d.getContext("2d");



function dibujar(color, x_inicial, y_inicial, x_final,  y_final)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
  }

function dibujo_por_clik()
  {
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var tinta = "rgb(45, 45, 45x)";
    var ancho = d.width;

    for(l= 0; l < lineas; l++)
      {
        yi = (d.width/lineas) * l;
        xf = (d.height/lineas) * (l + 1);

        dibujar(tinta, 300, yi, xf, 0);
        dibujar(tinta, 0, yi, xf, 300);
      }
    dibujar(tinta, 1, 1, ancho - 1, 1 );
    dibujar(tinta, ancho - 1, 1, ancho - 1, ancho - 1);
    dibujar(tinta, ancho - 1, ancho - 1, 1, ancho - 1);
    dibujar(tinta, 1, ancho - 1, 1, 1 );

  }
