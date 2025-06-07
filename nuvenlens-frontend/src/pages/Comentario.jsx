import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Comentarios = () => {
  const { id: fotoId } = useParams();
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState("");
  const [comentarioEditando, setComentarioEditando] = useState(null);
  const [textoEditado, setTextoEditado] = useState("");
  const [foto, setFoto] = useState(null);
  const token = localStorage.getItem("token");

  const usuarioId = token
    ? JSON.parse(atob(token.split(".")[1] || "{}")).id
    : null;

  useEffect(() => {
    
    if (!token) {
      window.location.href = "/login";
      return;
    }
    fetch(`http://localhost:3000/api/comentarios?foto_id=${fotoId}`)
      .then((res) => res.json())
      .then((dados) => setComentarios(dados))
      .catch((err) => console.error("Erro ao carregar comentários:", err));
    fetch(`http://localhost:3000/api/fotos/${fotoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((dados) => setFoto(dados))
      .catch((err) => console.error("Erro ao carregar foto:", err));
  }, [fotoId]);

  const handleEnviarComentario = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const resposta = await fetch("http://localhost:3000/api/comentarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ texto: novoComentario, foto_id: fotoId }),
      });

      if (resposta.ok) {
        const novo = await resposta.json();
        setComentarios((prev) => [...prev, novo]);
        setNovoComentario("");
      } else {
        alert("Erro ao enviar comentário.");
      }
    } catch (error) {
      console.error("Erro ao comentar:", error);
    }
  };

  const handleExcluir = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const resposta = await fetch(
        `http://localhost:3000/api/comentarios/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (resposta.ok) {
        setComentarios((prev) => prev.filter((c) => c.id !== id));
      } else {
        alert("Erro ao excluir comentário.");
      }
    } catch (error) {
      console.error("Erro ao excluir:", error);
    }
  };

  const handleSalvarEdicao = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const resposta = await fetch(
        `http://localhost:3000/api/comentarios/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ texto: textoEditado }),
        }
      );

      if (resposta.ok) {
        setComentarios((prev) =>
          prev.map((c) => (c.id === id ? { ...c, texto: textoEditado } : c))
        );
        setComentarioEditando(null);
        setTextoEditado("");
      } else {
        alert("Erro ao atualizar comentário.");
      }
    } catch (error) {
      console.error("Erro ao atualizar:", error);
    }
  };

  return (
    <div className="mt-3 w-50"><div className="container">
      {foto && (
        <>
          <img src={"http://localhost:3000" + foto.url} alt="" />
          <h4 className="mt-2">{foto.titulo}</h4>
          <p className="text-muted">{foto.descricao}</p>

        </>
      )}
      <h5>Comentários</h5>
      {comentarios.length === 0 ? (
        <p className="text-muted">Nenhum comentário ainda.</p>
      ) : (
        comentarios.map((c) => (
          <div key={c.id} className="mb-2 border-bottom pb-2 card text-start">
            <strong>{c.nome}</strong> <br />
            <small className="text-muted">
              {new Date(c.data_comentario).toLocaleString()}
            </small>
            {comentarioEditando === c.id ? (
              <>
                <textarea
                  className="form-control my-2"
                  value={textoEditado}
                  onChange={(e) => setTextoEditado(e.target.value)}
                />
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => handleSalvarEdicao(c.id)}
                >
                  Salvar
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setComentarioEditando(null)}
                >
                  Cancelar
                </button>
              </>
            ) : (
              <p>{c.texto}</p>
            )}
            {c.usuario_id === usuarioId && comentarioEditando !== c.id && (
              <div className="d-flex gap-2">
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => {
                    setComentarioEditando(c.id);
                    setTextoEditado(c.texto);
                  }}
                >
                  Editar
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleExcluir(c.id)}
                >
                  Excluir
                </button>
              </div>
            )}
          </div>
        ))
      )}
      <form onSubmit={handleEnviarComentario} className="mt-3">
        <textarea
          className="form-control mb-2"
          placeholder="Escreva um comentário..."
          value={novoComentario}
          onChange={(e) => setNovoComentario(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Enviar Comentário
        </button>
      </form>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <a href="/galeria" className="btn btn-primary">
          Voltar para Galeria
        </a>
        </div>
    </div>
  );
};

export default Comentarios;
