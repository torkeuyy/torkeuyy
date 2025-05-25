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
    // si querés ocultar el botón de comprar:
    // botonComprar.style.display = 'none';
    // pero si lo querés mostrar siempre, no hagas nada.
  }
}
