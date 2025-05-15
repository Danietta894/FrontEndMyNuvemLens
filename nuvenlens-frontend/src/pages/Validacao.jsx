import React, { useEffect, useState } from "react";

const ValidacoesPage = () => {
  const [imagens, setImagens] = useState([]);

  // Buscar imagens pendentes
  useEffect(() => {
    fetch("http://localhost:3001/api/imagens/pendentes", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setImagens(data))
      .catch((err) => console.error("Erro ao carregar imagens:", err));
  }, []);

  // Aprovar imagem
  const aprovarImagem = (id) => {
    fetch(`http://localhost:3001/api/imagens/${id}/aprovar`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          setImagens((prev) => prev.filter((img) => img.id !== id));
        } else {
          throw new Error("Erro ao aprovar imagem");
        }
      })
      .catch((err) => console.error("Erro ao aprovar imagem:", err));
  };

  // Recusar imagem
  const recusarImagem = (id) => {
    fetch(`http://localhost:3001/api/imagens/${id}/recusar`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          setImagens((prev) => prev.filter((img) => img.id !== id));
        } else {
          throw new Error("Erro ao recusar imagem");
        }
      })
      .catch((err) => console.error("Erro ao recusar imagem:", err));
  };

  return (
    <div className="validacoes-container">
      <h2>Imagens Pendentes para Validação</h2>
      {imagens.length === 0 ? (
        <p>Nenhuma imagem pendente no momento.</p>
      ) : (
        <div className="grid">
          {imagens.map((img) => (
            <div className="card" key={img.id}>
              <img src={`/uploads/${img.nome_arquivo}`} alt="Imagem de nuvem" />
              <p>
                <strong>Tipo sugerido:</strong> {img.tipo_sugerido}
              </p>
              <p>
                <strong>Usuário:</strong> {img.usuario_nome}
              </p>
              <div className="botoes">
                <button
                  className="aprovar"
                  onClick={() => aprovarImagem(img.id)}
                >
                  ✅ Aprovar
                </button>
                <button
                  className="recusar"
                  onClick={() => recusarImagem(img.id)}
                >
                  ❌ Recusar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ValidacoesPage;
