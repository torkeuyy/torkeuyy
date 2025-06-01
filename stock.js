// STOCK DE PRODUCTOS
const stockProductos = {
  "trueno": 0,
  "gorillaz": 0,
  "newyork": 0,
  "torkeestatua": 0
};

function mostrarStock(productoId) {
  const cantidad = stockProductos[productoId];

  const stockSpan = document.getElementById('stock-cantidad');
  const botonComprar = document.getElementById('boton-comprar');

  if (cantidad === undefined) return;

  stockSpan.textContent = cantidad;

  if (cantidad === 0) {
    stockSpan.textContent = 'Agotado';
    // botonComprar.style.display = 'none'; // opcional
  }
}

// LUZ QUE SIGUE AL CURSOR
const light = document.createElement('div');
light.className = 'cursor-light';
document.body.appendChild(light);

window.addEventListener('mousemove', (e) => {
  light.style.transform = `translate(${e.clientX - 75}px, ${e.clientY - 75}px)`;
});
