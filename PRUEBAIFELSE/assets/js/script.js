$(function(){
  var nombre = prompt("Cuál es tu nombre?", "Nombre por defecto");
  var color_favorito = prompt("¿Cuál es tu color favorito (en inglés)?", "blue")
  var edad = prompt("¿Qué edad tienes?", "18");
  edad = parseInt(edad);
  $("h1").append(nombre).css("color", color_favorito);
  if (edad < 18) {
    $("h1").after("<p>Eres menor de edad.</p>");
  } else if (edad == 18) {
    $("h1").after("<p>Tienes exactamente 18 años</p>");
  } else if (edad > 18) {
    $("h1").after("<p>Eres mayor de edad</p>");
  } else {
    $("h1").after("<p>No ingresaste un número de edad válido</p>");
  }
});
