var usuario = prompt("Indica tu peso.\n(En Kg)");
var planeta = parseFloat(prompt("Escoje un planeta. \n 1.-luna. \n 2.-marte. \n 3.-jupiter."));
var peso = parseFloat(usuario);
var g_tierra = 9.81;
var g_luna = 1.62;
var g_marte = 3.71;
var g_jupiter = 24.79;
var peso_final;
if (planeta == 1)
{
  peso_final = usuario * g_luna / g_tierra;
  document.write("Tu peso en la  luna es <strong>" + peso_final + " Kg</strong");
}
 else if(planeta == 2)
 {
 peso_final = usuario * g_marte / g_tierra
 document.write("Tu peso en marte es  <strong>" + peso_final + " Kg</strong");
 }
 else if(planeta == 3)
 {
   peso_final = usuario * g_jupiter / g_tierra
   document.write("Tu peso en jupiter es <strong>" + peso_final +  "Kg</strong>");
 }
 else
  {
   alert("coloca un valor valido");
 }

peso_final = parseFloat(peso_final);
