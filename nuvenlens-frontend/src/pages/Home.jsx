import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const fetchFotos = async () => {
      // Se não houver token, redireciona para login

      try {
        const resposta = await fetch("http://localhost:3000/api/fotos", {});

        if (!resposta.ok) {
          throw new Error("Não autorizado");
        }

        const dados = await resposta.json();

        setFotos(
          dados.map((foto) => ({
            src: "http://localhost:3000" + foto.url,
            ...foto,
          }))
        );
      } catch (error) {}
    };
    fetchFotos();
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
          {fotos.map((foto) => (
            <Card key={foto.id} foto={foto} comentarios curtidas  />
          ))}
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
              <h5>Mariana Ribeiro</h5>
              <p>
                Sempre amei fotografar o céu, mas nunca soube exatamente o que
                estava observando. Com o My NuvenLens, aprendi a identificar
                tipos de nuvens e ainda compartilho minhas fotos com pessoas que
                entendem esse amor. É como encontrar uma nova família!{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="testimonial-card p-4 shadow rounded">
              <h5>Luiz Fernando</h5>
              <p>
                Uso as imagens da comunidade My NuvemLens para enriquecer minhas
                aulas de geografia e meteorologia. A plataforma se tornou uma
                ponte entre ciência cidadã e educação, mostrando que todo mundo
                pode contribuir para a construção do conhecimento.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="testimonial-card p-4 shadow rounded">
              <h5>Rosa Maria</h5>
              <p>
                Um dia, achei que tinha visto uma nuvem muito rara e postei no
                My NuvemLens. Em poucas horas, outros usuários me ajudaram a
                identificar: era uma iridescência! A troca de saberes aqui é
                incrível, a gente aprende e ensina ao mesmo tempo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
