function header() {
    // ----------- Header -----------
  
    document.getElementById("idheader").innerHTML =
    `
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">


      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="index.html">Inicio</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Conductores
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="conductoresAlta.html">Alta de Conductores</a></li>
              <li><a class="dropdown-item" href="conductoresGestion.html">Gestión de Conductores</a></li>
              <li><a class="dropdown-item" href="conductoresReporte.html">Reporte de Conductores</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Autobuses
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Alta de Autobuses</a></li>
              <li><a class="dropdown-item" href="#">Gestión de Autobuses</a></li>
              <li><a class="dropdown-item" href="#">Reporte de Autobuses</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Rutas
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Alta de Rutas</a></li>
              <li><a class="dropdown-item" href="#">Gestión de Rutas</a></li>
              <li><a class="dropdown-item" href="#">Reporte de Rutas</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Paradas
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Alta de Paradas</a></li>
              <li><a class="dropdown-item" href="#">Gestión de Paradas</a></li>
              <li><a class="dropdown-item" href="#">Reporte de Paradas</a></li>
            </ul>
          </li>


          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
          </li>
        </ul>

        <!-- Logo/marca a la derecha -->
        <a class="navbar-brand ms-auto" href="#">GGHL Transportes</a>
      </div>

      <!-- Botón de hamburguesa -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  `
}

header();

