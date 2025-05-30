function header() {
    // Header para reutilizarlo mientras implementamos Angular. 
    // En cada html hay que definir un elemento con el idheader donde se va a agregar.
  
    document.getElementById("idheader").innerHTML =
    `


    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
  
  
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Inicio</a>
          </li>
  
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Conductores
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="conductoresAlta.html">Alta</a></li>
              <li><a class="dropdown-item" href="conductoresGestion.html">Gestión</a></li>
              <li><a class="dropdown-item" href="conductoresReporte.html">Reporte</a></li>
            </ul>
          </li>
  
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Autobuses
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Alta</a></li>
              <li><a class="dropdown-item" href="#">Gestión</a></li>
              <li><a class="dropdown-item" href="#">Reporte</a></li>
            </ul>
          </li>
  
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Rutas
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Alta</a></li>
              <li><a class="dropdown-item" href="#">Gestión</a></li>
              <li><a class="dropdown-item" href="#">Reporte</a></li>
            </ul>
          </li>
  
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Paradas
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Alta</a></li>
              <li><a class="dropdown-item" href="#">Gestión</a></li>
              <li><a class="dropdown-item" href="#">Reporte</a></li>
            </ul>
          </li>
  
  
          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
          </li>
        </ul>
          <a class="navbar-brand ms-auto" href="#">GGHL Transportes</a>
      </div>
  
      <!-- Menu hamburguesa -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  `
}

header();

