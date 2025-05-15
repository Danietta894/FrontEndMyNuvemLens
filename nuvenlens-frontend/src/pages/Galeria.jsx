import {
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiBookmark,
  FiFlag,
} from "react-icons/fi";
import React from "react";
import Card from "../components/Card";

const Galeria = () => {
  const [fotos, setFotos] = React.useState([]);

  React.useEffect(() => {
    const fetchFotos = async () => {
      // Se não houver token, redireciona para login

      try {
        const resposta = await fetch("http://localhost:3000/api/fotos", {});

        if (!resposta.ok) {
          throw new Error("Não autorizado");
        }

        const dados = await resposta.json();

        setFotos(dados.map((foto) => ({
          src: 'http://localhost:3000'+foto.url,
          ...foto
        })));
      } catch (error) {}
    };
    fetchFotos();
  }, []);
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4 text-primary">Nossa Galeria</h2>

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
          <option value="Cumulus">Cumulus</option>
          <option value="Cirrus">Cirrus</option>
          <option value="Stratocumulus">Stratocumulus</option>
        </select>

        <div className="upload-button d-inline-block">
          <a href="/upload" className="btn btn-success rounded-pill">
            <i className="fas fa-cloud-upload-alt"></i> Enviar Imagem
          </a>
        </div>
      </div>

      <section className="container bg-light mt-4 pt-5 rounded-5" id="galeria">
        <div className="row">
          {fotos.map((foto) => (
            <Card key={foto.id} foto={foto} comentarios curtidas  />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Galeria;
