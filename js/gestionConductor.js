
// Lista de conductores inicial
const conductores = [
  {
    orden: '1',
    apellido: 'Pérez',
    nombre: 'Martin',
    registro: '00123456',
    fechaNacimiento: '12/04/1985'
  },
  {
    orden: '2',
    apellido: 'Rodríguez',
    nombre: 'Laura',
    registro: '00123457',
    fechaNacimiento: '25/08/1990'
  },
  {
    orden: '3',
    apellido: 'Fernández',
    nombre: 'Pablo',
    registro: '00123458',
    fechaNacimiento: '19/01/1978'
  }

];

// Cargar tabla con conductores
function cargarTabla() {
  const tbody = document.querySelector('#tablaConductores tbody');
  tbody.innerHTML = '';

  conductores.forEach(c => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${c.orden}</td>
      <td>${c.apellido}</td>
      <td>${c.nombre}</td>
      <td>${c.registro}</td>
      <td>${c.fechaNacimiento}</td>
      <td>
          <a href="conductor-1.html" class="btn btn-primary btn-sm">Modificar</a>
          <button class="btn btn-danger btn-sm">Eliminar</button>
      </td>
    
    `;
    tbody.appendChild(fila);
  });
}

// Agregar nuevo conductor desde el formulario
document.addEventListener('DOMContentLoaded', () => {
  cargarTabla();

  const form = document.getElementById('formConductor');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nuevoConductor = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      registro: document.getElementById('registro').value,
      fechaNacimiento: document.getElementById('fechaNacimiento').value
    };

    conductores.push(nuevoConductor);
    cargarTabla();
    form.reset();
  });
});