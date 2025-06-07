import React, { useEffect, useState } from "react";

const ValidacoesPage = () => {
  const [imagens, setImagens] = useState([]);
  const [tipodigitado, setTipoDigitado] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3000/api/imagens/pendentes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setImagens(data))
      .catch((err) => console.error("Erro ao carregar imagens:", err));
  }, []);

  const aprovarImagem = (id, tipo) => {
    fetch(`http://localhost:3000/api/imagens/${id}/aprovar`, {
      method: "POST",
      body: JSON.stringify({ tipo }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
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

  const recusarImagem = (id) => {
    fetch(`http://localhost:3000/api/imagens/${id}/recusar`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
              <img
                src={`http://localhost:3000${img.url}`}
                alt="Imagem de nuvem"
              />
              <div>
                <label>
                  <strong>Definir tipo de nuvem:</strong>
                  <select
                    id="filter"
                    className="form-select d-inline-block w-auto mx-2"
                    onChange={(e) => setTipoDigitado(e.target.value)}
                    value={tipodigitado}
                  >
                    <option value="all">Todos</option>

                    <optgroup label="Altas">
                      <option value="Cirrus">Cirrus</option>
                      <option value="Cirrostratus">Cirrostratus</option>
                      <option value="Cirrocumulus">Cirrocumulus</option>
                    </optgroup>

                    <optgroup label="Médias">
                      <option value="Altostratus">Altostratus</option>
                      <option value="Altocumulus">Altocumulus</option>
                    </optgroup>

                    <optgroup label="Baixas">
                      <option value="Stratus">Stratus</option>
                      <option value="Stratocumulus">Stratocumulus</option>
                      <option value="Nimbostratus">Nimbostratus</option>
                    </optgroup>

                    <optgroup label="Desenvolvimento vertical">
                      <option value="Cumulus">Cumulus</option>
                      <option value="Cumulus Congestus">
                        Cumulus Congestus
                      </option>
                      <option value="Cumulonimbus">Cumulonimbus</option>
                    </optgroup>
                  </select>
                  <p></p>
                </label>
              </div>

              <div>
                <strog>Uusuário:</strog> {img.usuario}
              </div>

              <div className="botoes">
                <button
                  className="aprovar"
                  onClick={() => aprovarImagem(img.id, tipodigitado)}
                >
                  Aprovar
                </button>
                <button
                  className="recusar"
                  onClick={() => recusarImagem(img.id)}
                >
                  Recusar
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
