import { useEffect } from "react";
import Card from "../components/Card";

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
                </div>
              </div>
            `;
          });
        }
      });
  }, []);

  return (
    <>
      <div className="container mt-4 text-center">
        <label
          htmlFor="filter"
          className="fw-bold"
          style={{ color: "#4A90E2" }}
        >
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
        <h2 className="text-center" style={{ color: "#4A90E2" }}>
          Nossa Galeria
        </h2>
        <div className="row">
          <Card
            ocultardenuncias
            foto={{
              id: 1,
              src: "nuvens/nuvem1.jpg",
              titulo: "Nuvens Cumulus",
              descricao: "Formação típica de dias quentes e úmidos.",
            }}
          />
          <Card
            ocultardenuncias
            curtidas="2"
            foto={{
              id: 2,
              src: "nuvens/nuvem2.jpg",
              titulo: "Nuvens Cirrus",
              descricao: "Altas e delicadas, indicam mudança no tempo.",
            }}
          />
          <Card
            ocultardenuncias
            foto={{
              id: 3,
              src: "nuvens/nuvem3.jpg",
              titulo: "Nuvens Estratocumulus",
              descricao:
                "Cobertura extensa com aparência de colcha de retalhos.",
            }}
          />
        </div>
      </section>

      <section
        className="container bg-light mt-4 pt-5 pb-5 rounded-5"
        id="depoimentos"
      >
        <h2 className="text-center mb-4" style={{ color: "#4A90E2" }}>
          O que dizem nossos usuários
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <div className="testimonial-card p-4 shadow rounded">
              <h5>João Silva</h5>
              <p>
                "Encontrei na NuvemLens uma comunidade incrível! É inspirador
                ver as nuvens de tantos lugares diferentes e aprender sobre cada
                tipo com outros entusiastas."
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="testimonial-card p-4 shadow rounded">
              <h5>Maria Oliveira</h5>
              <p>
                "A NuvemLens me inspirou a prestar mais atenção no céu. Antes eu
                passava despercebida, agora fico encantada com cada nuvem que
                vejo!"
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="testimonial-card p-4 shadow rounded">
              <h5>Carlos Souza</h5>
              <p>
                "Sou apaixonado pela natureza e encontrar um espaço como a
                NuvemLens é um sonho! Me sinto parte de uma comunidade de
                verdade."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
