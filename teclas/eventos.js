var teclas =
{
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};


document.addEventListener("keydown",dibujarTeclado);
var cuadro = document.getElementById("Dibujo");
var papel = cuadro.getContext("2d");

var x = 150;
var y = 150;

dibujar("red",149,149,151,151,papel);

function dibujar(color, x_inicial, y_inicial, x_final, y_final,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "rgb(42, 42, 42)";
  var movimiento = 1;
  switch (evento.keyCode)
    {
      case teclas.UP:
        dibujar(colorcito, x, y, x, y - movimiento,papel );
         y = y - movimiento;
        break;
      case teclas.DOWN:
      dibujar(colorcito, x, y, x, y + movimiento,papel );
       y = y + movimiento;
        break;
      case teclas.LEFT:
      dibujar(colorcito, x, y, x - movimiento, y,papel);
       x = x - movimiento;
        break;
      case teclas.RIGHT:
      dibujar(colorcito, x, y, x + movimiento, y,papel);
       x = x + movimiento;
        break;
      default:
        console.log("otra tecla");
        break;
  }
}
