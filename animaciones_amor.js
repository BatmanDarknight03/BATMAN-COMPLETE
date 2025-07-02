// animaciones_amor.js

// Abre una vista romántica en nueva pestaña
function abrirVistaEspecial(tipo) {
    if (tipo === 'amor') {
      window.open('amor_infinito.html', '_blank');
    } else if (tipo === 'mapa') {
      window.open('recorrido_mapa.html', '_blank');
    }
  }
  
  // Función para mostrar el QR (si tienes una URL fija asociada al código QR)
  function mostrarQR() {
    // Cambia esta URL por la que apunta tu QR real
    window.open("https://tusitio.com/index.html", "_blank");
  }
  