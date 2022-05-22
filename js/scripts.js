// querySelector

const heading = document.querySelector(".header__texto h2");
heading.textContent = "Hola Mi Coffee";
console.log(heading);

//QuerySelectorAll
const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = "Nuevo texto para enlace";
enlaces[0].classList.add("nueva-clase");
//enlaces[0].classList.remove("navegacion__enlace");

//Generar un nuevo enlace
const nuevoEnlace = document.createElement("A");
//AGregar el href
nuevoEnlace.href = "nuevo-enlace.html";
//Agregar el texto
nuevoEnlace.textContent = "Tienda Virtual";
//agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");
//Agregarlo al document
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);
