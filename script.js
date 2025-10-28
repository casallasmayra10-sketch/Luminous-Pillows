// Mostrar sección del menú
function mostrarSeccion(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("activo"));
  document.getElementById(id).classList.add("activo");
}

// Carrusel de imágenes
let slideIndex = 0;
function mostrarSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex-1].style.display = "block";
  setTimeout(mostrarSlides, 3000); // Cambia cada 3 segundos
}
mostrarSlides();

// Carrito simple
let contadorCarrito = 0;
function agregarCarrito() {
  contadorCarrito++;
  document.getElementById("contador-carrito").textContent = "🛒 " + contadorCarrito;
}

// Formulario de contacto
function enviarCorreo() {
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje");
  if (correo.includes("@")) {
    mensaje.textContent = "Gracias, pronto te contactaremos 😊";
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "Por favor, ingresa un correo válido 😅";
    mensaje.style.color = "red";
  }
}
