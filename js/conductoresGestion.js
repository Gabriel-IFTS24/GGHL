// Si no hay conductores guardados, los cargo

const conductores = JSON.parse(localStorage.getItem('conductores')) || [
    { apellido: "González", nombre: "Martín", DNI: 73621498, numeroRegistro: "123456", fechaNacimiento: "1985-12-04" },
    { apellido: "Rodríguez", nombre: "Laura", DNI: 47283794, numeroRegistro: "123457", fechaNacimiento: "1990-05-01" },
    { apellido: "Fernández", nombre: "Pablo", DNI: 92837461, numeroRegistro: "123458", fechaNacimiento: "1978-04-11" },
    { apellido: "López", nombre: "Camila", DNI: 62938475, numeroRegistro: "123459", fechaNacimiento: "1992-09-04" },
    { apellido: "Martínez", nombre: "Javier", DNI: 12837462, numeroRegistro: "123460", fechaNacimiento: "1987-10-02" },
    { apellido: "Pérez", nombre: "Mariana", DNI: 79462738, numeroRegistro: "123461", fechaNacimiento: "1995-12-12" },
    { apellido: "Sánchez", nombre: "Nicolás", DNI: 32874692, numeroRegistro: "123462", fechaNacimiento: "1983-08-03" },
    { apellido: "Romero", nombre: "Julieta", DNI: 67102854, numeroRegistro: "123463", fechaNacimiento: "1989-03-05" },
    { apellido: "Herrera", nombre: "Tomás", DNI: 58392016, numeroRegistro: "123464", fechaNacimiento: "1975-08-11" },
    { apellido: "Castro", nombre: "Valentina", DNI: 49382076, numeroRegistro: "123465", fechaNacimiento: "1993-01-08" }
];

// Busco el body de la tabla
const tbody = document.getElementById("tbody")

// Variable para el número de la tabla
let fila = 1

// Agrego un tr por cada conductor del array
conductores.forEach(conductor => {tbody.innerHTML += `
    <tr>
        <th scope="row">${fila}</th>
        <td>${conductor.apellido}</td>
        <td>${conductor.nombre}</td>
        <td>${conductor.DNI}</td>
        <td>${conductor.numeroRegistro}</td>
        <td>${conductor.fechaNacimiento}</td>
        <td>
            <a href="conductor-${fila}.html" class="btn btn-primary btn-sm">Modificar</a>
            <button class="btn btn-danger btn-sm">Eliminar</button>
        </td>
    </tr>
    `;
    fila += 1;
})

