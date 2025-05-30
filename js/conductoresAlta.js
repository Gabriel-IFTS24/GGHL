// Si no hay conductores guardados, los cargo

let conductores = JSON.parse(localStorage.getItem('conductores')) || [
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



function agregarConductor(e){
    e.preventDefault(); // No tiene action el botón que llama la función pero por las dudas para evitar que haga refresh al presionar el botón


    // Tomo los datos de los campos
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const DNI = document.getElementById('DNI').value;
    const numeroRegistro = document.getElementById('registro').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    // Agrego el registro al array
    conductores.push({apellido, nombre, DNI, numeroRegistro, fechaNacimiento});

    // Guardo en el local storage
    localStorage.setItem('conductores', JSON.stringify(conductores));

    // Blanqueo los campos
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('DNI').value = '';
    document.getElementById('registro').value = '';
    document.getElementById('fechaNacimiento').value = '';

    // Mensaje
    alert("Conductor agregado con éxito.");
};