const conductores = JSON.parse(localStorage.getItem('conductores')) || [
    { apellido: "González", nombre: "Martín", numeroRegistro: "123456", fechaNacimiento: "1985-12-04" },
    { apellido: "Rodríguez", nombre: "Laura", numeroRegistro: "123457", fechaNacimiento: "1990-05-01" },
    { apellido: "Fernández", nombre: "Pablo", numeroRegistro: "123458", fechaNacimiento: "1978-04-11" },
    { apellido: "López", nombre: "Camila", numeroRegistro: "123459", fechaNacimiento: "1992-09-04" },
    { apellido: "Martínez", nombre: "Javier", numeroRegistro: "123460", fechaNacimiento: "1987-10-02" },
    { apellido: "Pérez", nombre: "Mariana", numeroRegistro: "123461", fechaNacimiento: "1995-12-12" },
    { apellido: "Sánchez", nombre: "Nicolás", numeroRegistro: "123462", fechaNacimiento: "1983-08-03" },
    { apellido: "Romero", nombre: "Julieta", numeroRegistro: "123463", fechaNacimiento: "1989-03-05" },
    { apellido: "Herrera", nombre: "Tomás", numeroRegistro: "123464", fechaNacimiento: "1975-08-11" },
    { apellido: "Castro", nombre: "Valentina", numeroRegistro: "123465", fechaNacimiento: "1993-01-08" }
  ];

const tbody = document.getElementById("tbody")
let fila = 1

conductores.forEach(conductor => {tbody.innerHTML += `
    <tr>
        <th scope="row">${fila}</th>
        <td>${conductor.apellido}</td>
        <td>${conductor.nombre}</td>
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

