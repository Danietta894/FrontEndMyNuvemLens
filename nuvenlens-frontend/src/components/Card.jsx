import { FiFlag, FiHeart, FiMessageCircle, FiSend } from "react-icons/fi";
import "./Card.css";
import { useEffect, useState } from "react";

export default function Card({
  foto,
  curtidas,
  comentarios,
  compartilhamentos,
  ocultardenuncias,
}) {
  const [totalCurtidas, setTotalCurtidas] = useState(0);
  const [totalComentario, setTotalComentario] = useState(0);
  useEffect(() => {
    const fetchCurtidas = async () => {
      try {
        const resposta = await fetch(
          `http://localhost:3000/api/curtidas/${foto.id}`
        );
        const dados = await resposta.json();
        setTotalCurtidas(dados.length);
      } catch (error) {
        console.error("Erro ao carregar curtidas:", error);
      }
    };

    const fetchComentarios = async () => {
      try {
        const resposta = await fetch(
          `http://localhost:3000/api/comentarios?foto_id=${foto.id}`
        );
        const dados = await resposta.json();
        setTotalComentario(dados.length);
      } catch (error) {
        console.error("Erro ao carregar comentários:", error);
      }
    };

    fetchCurtidas();
    fetchComentarios();
  }, [foto.id]);
  const handleCurtida = async () => {
    const token = localStorage.getItem("token");
    try {
      const resposta = await fetch(
        `http://localhost:3000/api/curtidas/${foto.id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (resposta.ok) {
        setTotalCurtidas((prev) => prev + 1);
      } else {
        alert("Erro ao curtir a foto.");
      }
    } catch (error) {
      console.error("Erro ao curtir:", error);
    }
  };
  return (
    <div className="col-md-4 mb-4" key={foto.id}>
      <div className="gallery-card">
        <a href={"/comentario/" + foto.id}>
          {" "}
          <img src={foto.src} alt={foto.titulo} className="img-fluid rounded" />
        </a>
        <div className="card-body">
          <h5 className="card-title">{foto.titulo}</h5>
          <p className="card-text">{foto.descricao}</p>
          <div className="category-description">
            Esta imagem mostra um exemplo de:
          </div>
          <div className="category-tags">
            <a href="/">{foto.tipo}</a>
            <p className="mb-0">{foto.local}</p>
            <p className="mb-0">{foto.data}</p>
          </div>
          {foto.nome_usuario && (
            <div className="author-info">
              <strong>Enviado por:</strong> {foto.nome_usuario}
            </div>
          )}

          <div className="d-flex justify-content-around mt-3 icon-actions">
            <button className="icon-button" title="Curtir">
              <FiHeart />
              {curtidas && <span className="badge">{totalCurtidas}</span>}
            </button>

            <button
              className="icon-button"
              title="Comentar"
              onClick={() => {
                window.location.href = `/comentario/${foto.id}`;
              }}
            >
              <FiMessageCircle />
              {comentarios && <span className="badge">{totalComentario}</span>}
            </button>

            <button className="icon-button" title="Compartilhar">
              <FiSend />
              {compartilhamentos && (
                <span className="badge">{compartilhamentos}</span>
              )}
            </button>

            {!ocultardenuncias && (
              <button className="icon-button" title="Ocultar Denúncias">
                <FiFlag />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
