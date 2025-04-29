import React, { useEffect, useState } from "react";

const ModeradorPerfil = () => {
  const [moderador, setModerador] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setErro(
        "Token de autenticação não encontrado. Por favor, faça login novamente."
      );
      return;
    }

    fetch("http://localhost:3000/api/moderador/perfil", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao carregar perfil do moderador");
        return res.json();
      })
      .then((data) => setModerador(data))
      .catch((err) => setErro(err.message));
  }, []);

  if (erro) {
    return <div className="container mt-5 alert alert-danger">{erro}</div>;
  }

  if (!moderador) {
    return (
      <div className="container mt-5 text-center">Carregando perfil...</div>
    );
  }

  return (
    <div style={{ backgroundColor: "#eaf3fc", minHeight: "100vh" }}>
      <header style={styles.header}>
        <nav style={styles.navbar}>
          <a href="/galeria" style={styles.link}>
            Galeria
          </a>
          <a href="/validacoes" style={styles.link}>
            Validações
          </a>
          <a href="/denuncias" style={styles.link}>
            Denúncias
          </a>
        </nav>
      </header>

      <main className="container py-4">
        <section className="text-center bg-white p-4 rounded shadow">
          <img
            src={moderador.fotoPerfil}
            alt="Foto do Moderador"
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              marginBottom: 10,
            }}
          />
          <h2>{moderador.nome}</h2>
          <p style={{ fontStyle: "italic", color: "#555" }}>{moderador.bio}</p>
          <button className="btn btn-primary">Editar Perfil</button>
        </section>

        <section className="bg-white mt-4 p-4 rounded shadow">
          <h3 className="text-primary">Permissões</h3>
          <ul>
            {moderador.permissoes.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white mt-4 p-4 rounded shadow">
          <h3 className="text-primary">Últimas Atividades</h3>
          <div className="d-flex gap-3 flex-wrap">
            {moderador.fotos.map((foto, i) => (
              <img
                key={i}
                src={foto.url}
                alt={`Atividade ${i + 1}`}
                className="img-thumbnail"
                style={{ width: 200, borderRadius: 10 }}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#4a90e2",
    padding: "15px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  navbar: {
    display: "flex",
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    backgroundColor: "#4a90e2",
    padding: "8px 15px",
    borderRadius: "5px",
  },
  logout: {
    backgroundColor: "#ff5e57",
  },
};

export default ModeradorPerfil;
