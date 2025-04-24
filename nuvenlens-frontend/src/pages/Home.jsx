import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3000/api/fotos")
      .then((response) => response.json())
      .then((data) => {
        const galeria = document.getElementById("galeria-fotos");
        if (galeria) {
          galeria.innerHTML = "";
          data.forEach((foto) => {
            galeria.innerHTML += `
              <div class="col-md-4">
                <div class="gallery-card">
                  <img src="nuvens/${foto.arquivo}" alt="${foto.descricao}" />
                  <div class="category-description">Esta imagem mostra um exemplo de:</div>
                  <div class="category-tags">
                    <a href="#">${foto.tipo}</a>
                    <p class="mb-0">${foto.local}</p>
                    <p class="mb-0">${foto.data}</p>
                  </div>
                </div>
              </div>
            `;
          });
        }
      });
  }, []);

  return (
    <>
      <header>
      <link rel="stylesheet" href="/src/App.css"/>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand fw-bold" href="#">My <span className="text-light">NuvemLens</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="/sobre">Sobre</a></li>
                <li className="nav-item"><a className="nav-link" href="/">Galeria</a></li>
                <li className="nav-item"><a className="nav-link" href="/catalogo">Conheça a Nossa Loja</a></li>
                <li className="nav-item"><a className="nav-link" href="/upload">Upload de Imagens</a></li>
                <li className="nav-item"><button className="btn btn-light ms-2" onClick={() => window.location.href='/login'}>Login</button></li>
              </ul>
            </div>
          </div>
        </nav>
        
      </header>


      <div className="container mt-4 text-center">
        <label htmlFor="filter" className="fw-bold" style={{ color: "#4A90E2" }}>
          Filtrar por tipo de nuvem:
        </label>
        <select id="filter" className="form-select d-inline-block w-auto mx-2">
          <option value="all">Todos</option>
          <option value="Cumulonimbus">Cumulonimbus</option>
          <option value="Cumulus Congestus">Cumulus Congestus</option>
          <option value="Altocumulus">Altocumulus</option>
          <option value="Stratocumulus">Stratocumulus</option>
        </select>
        <div className="upload-button d-inline-block">
          <a href="/upload" className="btn btn-success rounded-pill">
            <i className="fas fa-cloud-upload-alt"></i> Enviar Imagem
          </a>
        </div>
      </div>
      <section className="container bg-light mt-4 pt-5 rounded-5" id="galeria">
  <h2 className="text-center" style={{ color: "#4A90E2" }}>Nossa Galeria</h2>
  <div className="row">
    
    <div className="col-md-4">
      <div className="gallery-card">
        <img src="nuvens/nuvem2.jpg" alt="Cumulonimbus, Pannus, Pileus e Velum" />
        <div className="category-description">Esta imagem mostra um exemplo de:</div>
        <div className="category-tags">
          <a href="#">Cumulonimbus</a> | <a href="#">Pannus</a> | <a href="#">Pileus</a> | <a href="#">Velum</a>
          <p className="mb-0">São Raimundo Nonato-PI, Brasil</p>
          <p className="mb-0">25/11/2022</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="gallery-card">
        <img src="nuvens/nuvem3.jpg" alt="Cumulus Congestus e Pileus iridescentes" />
        <div className="category-description">Esta imagem mostra um exemplo de:</div>
        <div className="category-tags">
          <a href="#">Cumulus Congestus</a> | <a href="#">Pileus iridescentes</a>
          <p className="mb-0">São Raimundo Nonato-PI, Brasil</p>
          <p className="mb-0">08/08/2024</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="gallery-card">
        <img src="nuvens/nuvem4.jpeg" alt="Altocumulus, Cirrus e Cavum" />
        <div className="category-description">Esta imagem mostra um exemplo de:</div>
        <div className="category-tags">
          <a href="#">Altocumulus</a> | <a href="#">Cirrus</a> | <a href="#">Cavum (Fallstreak hole)</a>
          <p className="mb-0">Cotia-SP, Brasil</p>
          <p className="mb-0">15/09/2023</p>
        </div>
      </div>
    </div>

  </div>
</section>


     

<section className="container bg-light mt-4 pt-5 pb-5 rounded-5" id="depoimentos">
  <h2 className="text-center mb-4" style={{ color: "#4A90E2" }}>O que dizem nossos usuários</h2>
  <div className="row justify-content-center">
    <div className="col-md-4 mb-3">
      <div className="testimonial-card p-4 shadow rounded">
        <h5>João Silva</h5>
        <p>"Encontrei na NuvemLens uma comunidade incrível! É inspirador ver as nuvens de tantos lugares diferentes e aprender sobre cada tipo com outros entusiastas."</p>
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <div className="testimonial-card p-4 shadow rounded">
        <h5>Maria Oliveira</h5>
        <p>"A NuvemLens me inspirou a prestar mais atenção no céu. Antes eu passava despercebida, agora fico encantada com cada nuvem que vejo!"</p>
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <div className="testimonial-card p-4 shadow rounded">
        <h5>Carlos Souza</h5>
        <p>"Sou apaixonado pela natureza e encontrar um espaço como a NuvemLens é um sonho! Me sinto parte de uma comunidade de verdade."</p>
      </div>
    </div>
  </div>
</section>


      <footer className="text-center mt-4 py-4" style={{ backgroundColor: "#4A90E2", color: "#fff" }}>
        <p>© 2024 My NuvemLens. Todos os direitos reservados.</p>
        <div className="mb-2">
          <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
        </div>
        <small>Siga-nos nas redes sociais</small>
      </footer>
    </>
  );
}
