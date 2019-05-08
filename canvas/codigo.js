var d = document.getElementById("Dibujo");
var lienzo = d.getContext("2d");
var lineas = 400;
var l = 0;
var yi, xf, xi, yf;
var nxf, nyf;
var tinta = "rgb(40, 40, 40)";

for(l= 0; l < lineas; l++)
{
  yi = 100* 10;
  xf = 90 * (25 + 80);
  xi = 100* 10;
  yf = 90 * (l + 30);
  nxf = 800 - xf;
  nyf = 800 - yf;

  dibujar(tinta, 800, yi, xf, 0);
  dibujar(tinta, 0, yi, xf, 800);
  dibujar(tinta, 800, yi, xf, 800);
  dibujar(tinta, 0, yi, xf, 0);

  dibujar(tinta, xi, 800, 800, nyf);
  dibujar(tinta, xi, 800, 0, nyf);
  dibujar(tinta, xi, 0, 800, nyf);
  dibujar(tinta, xi, 0, 0, nyf);

  dibujar(tinta, 0, yi, nxf, 0);
  dibujar(tinta, 800, yi, nxf, 800);
  dibujar(tinta, 0, yi, nxf, 800);
  dibujar(tinta, 800, yi, nxf, 0);

  dibujar(tinta, 0, 0, nxf, nyf);
  dibujar(tinta, 800, 800, nxf, nyf);
  dibujar(tinta, 800, 0, nxf, nyf);
  dibujar(tinta, 0, 800, nxf, nyf);

  dibujar(tinta, xi, 800, 0, yf);
  dibujar(tinta, xi, 0, 800, yf)
  dibujar(tinta, xi, 800, 800, yf)
  dibujar(tinta, xi, 0, 0, yf)

  dibujar(tinta, xi, yi, 800, 0);
  dibujar(tinta, xi, yi, 0, 800);
  dibujar(tinta, xi, yi, 800, 800);
  dibujar(tinta, xi, yi, 0, 0);

  dibujar(tinta, 800, 0, xf, yf);
  dibujar(tinta, 0, 800, xf, yf);
  dibujar(tinta, 800, 800, xf, yf);
  dibujar(tinta, 0, 0, xf, yf);



}

dibujar(tinta , 1, 1, 799, 1);
dibujar(tinta , 799 , 1,  799,799);
dibujar(tinta , 799, 799, 1, 799);
dibujar(tinta , 1 , 799, 1, 1);

function dibujar(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
