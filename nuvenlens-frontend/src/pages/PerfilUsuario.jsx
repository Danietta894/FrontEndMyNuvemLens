import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Perfil = () => {
  const [usuario, setUsuario] = useState(null);
  const [fotos, setFotos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuario = async () => {
      const token = localStorage.getItem("token");

      // Se não houver token, redireciona para login
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const resposta = await fetch(
          "http://localhost:3000/api/perfilusuario",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!resposta.ok) {
          throw new Error("Não autorizado");
        }

        const dados = await resposta.json();
        setUsuario(dados.usuario);
        setFotos(dados.fotos || []);
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
        navigate("/login"); // Qualquer erro, redireciona
      }
    };

    fetchUsuario();
  }, [navigate]);

  if (!usuario) {
    return (
      <section className="container text-center mt-5">
        <p className="text-muted">Carregando perfil...</p>
      </section>
    );
  }

  return (
    <>
      {/* Perfil */}
      <section className="container profile-header text-center bg-white rounded shadow p-4 mt-4">
        <img
          src={usuario.fotoPerfil || "/perfis/default.jpg"}
          alt="Foto de Perfil"
          className="rounded-circle border border-primary mb-3"
          style={{ width: 120, height: 120, objectFit: "cover" }}
        />
        <h1>{usuario.nome}</h1>
        <p>
          <em>{usuario.bio || "Sem descrição pessoal."}</em>
        </p>
        <Link to="/perfil/editar" className="btn btn-warning text-white">
          Editar Perfil
        </Link>
      </section>

      {/* Informações Pessoais */}
      <section className="container info-section bg-white rounded shadow p-4 mt-4">
        <h3 className="text-primary border-bottom pb-2">
          Informações Pessoais
        </h3>
        <p>
          <strong>Email:</strong> {usuario.email}
        </p>
        <p>
          <strong>Interesses:</strong> {usuario.interesses || "Não informado"}
        </p>
        <p>
          <strong>Projetos:</strong> {usuario.projetos || "Não informado"}
        </p>
        <p>
          <strong>Localização:</strong> {usuario.localizacao || "Não informada"}
        </p>
        <p>
          <strong>Estilo de Perfil:</strong>{" "}
          {usuario.estiloPerfil || "Não informado"}
        </p>
      </section>

      {/* Fotos Enviadas */}
      <section className="container photos-section bg-white rounded shadow p-4 mt-4">
        <h3 className="text-primary">Fotos Enviadas</h3>
        <div className="row">
          {fotos.length > 0 ? (
            fotos.map((foto, index) => (
              <div className="col-md-4" key={index}>
                <img
                  src={foto.url}
                  alt={`Foto ${index + 1}`}
                  className="img-fluid rounded mb-3"
                />
              </div>
            ))
          ) : (
            <p className="text-muted">Nenhuma foto enviada ainda.</p>
          )}
        </div>
      </section>

      {/* Botões de Ação */}
      <section className="container text-center d-flex justify-content-center gap-3 mt-4">
        <Link to="/galeria" className="btn btn-primary">
          Ver Galeria
        </Link>
        <Link to="/upload" className="btn btn-success">
          Fazer Upload
        </Link>
      </section>
    </>
  );
};

export default Perfil;
