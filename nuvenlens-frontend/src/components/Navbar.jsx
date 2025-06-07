import { Link } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; 
  };
  const isLoggedIn = localStorage.getItem("token") !== null; 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand fw-bold nome-site" href="/">
          My <span className="text-light">NuvemLens</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/galeria">
                Galeria
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sobre">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/upload">
                Upload de Imagens
              </a>
            </li>
             {isLoggedIn ? (
              <li className="nav-item">
                <a className="nav-link" href="/perfilUsuario">
                  Meu Perfil
                </a>
              </li>
            ) : null} 
            <li className="nav-item ">
              <span>

              {isLoggedIn ? (
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button className="btn btn-danger" onClick={() => window.location.href = "/login"}>
                  Login
                </button>
              )}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
