import { FiFlag, FiHeart, FiMessageCircle, FiSend } from "react-icons/fi";

export default function Card({
  foto,
  curtidas,
  comentarios,
  compartilhamentos,
  ocultardenuncias,
}) {
  return (
    <div className="col-md-4 mb-4" key={foto.id}>
      <div className="gallery-card">
        <img src={foto.src} alt={foto.titulo} className="img-fluid rounded" />
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

          <div className="d-flex justify-content-around mt-3 icon-actions">
            <button className="icon-button" title="Curtir">
              <FiHeart />
              {curtidas && <span className="badge">{curtidas}</span>}
            </button>

            <button
              className="icon-button"
              title="Comentar"
              onClick={() => {
                window.location.href = `/comentario/${foto.id}`;
              }}
            >
              <FiMessageCircle />
              {comentarios && <span className="badge">{comentarios}</span>}
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
