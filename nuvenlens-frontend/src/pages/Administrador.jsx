import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPerfil = () => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmin = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");

      try {
        const resposta = await fetch("http://localhost:3000/api/usuarios/eu", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!resposta.ok) throw new Error("Não autorizado");

        const dados = await resposta.json();

        if (dados.perfil_id != 1) {
          return navigate("/perfilUsuario");
        }

        setUsuario(dados);
      } catch (error) {
        alert("errorrrr");
        console.error("Erro ao buscar perfil do administrador:", error);
        navigate("/login");
      }
    };

    fetchAdmin();
  }, [navigate]);

  if (!usuario) {
    return (
      <div className="container text-center mt-5">
        <p className="text-muted">Carregando perfil do administrador...</p>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-4">
        <div className="profile-card text-center bg-white p-4 shadow rounded">
          <img
            src={usuario.fotoPerfil || "/perfis/adm.jpg"}
            alt="Foto do Administrador"
            className="rounded-circle mb-3"
            width="100"
            height="100"
          />
          <h2>{usuario.nome}</h2>
          <p>
            <em>
              {usuario.bio ||
                "Responsável por manter a plataforma funcionando perfeitamente."}
            </em>
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/editarperfil")}
          >
            Editar Perfil
          </button>
        </div>

        <div className="info-section bg-white p-4 mt-4 shadow rounded">
          <h3 className="text-info">Informações Pessoais</h3>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
          <p>
            <strong>Funções:</strong> Gerenciar usuários, revisar conteúdo,
            monitorar segurança.
          </p>
          <p>
            <strong>Localização:</strong>{" "}
            {usuario.localizacao || "Não informada"}
          </p>
        </div>

        <div className="functions-section bg-white p-4 mt-4 shadow rounded">
          <h3 className="text-info">Ações Rápidas</h3>
          <div className="functions-buttons d-flex gap-2">
            <button className="btn blue-btn">Gerenciar Usuários</button>
            <button className="btn green-btn">Revisar Conteúdo</button>
            <button className="btn yellow-btn">Monitorar Segurança</button>
          </div>
        </div>

        <div className="activities-section bg-white p-4 mt-4 shadow rounded">
          <h3 className="text-info">Últimas Atividades</h3>
          <div className="d-flex gap-3 justify-content-between">
            <img
              src="nuvens/nuvem2.jpeg"
              alt="Atividade 1"
              className="img-fluid rounded"
              style={{ width: "30%" }}
            />
            <img
              src="nuvens/nuvem3.jpeg"
              alt="Atividade 2"
              className="img-fluid rounded"
              style={{ width: "30%" }}
            />
            <img
              src="nuvens/nuvem4.jpg"
              alt="Atividade 3"
              className="img-fluid rounded"
              style={{ width: "30%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPerfil;
