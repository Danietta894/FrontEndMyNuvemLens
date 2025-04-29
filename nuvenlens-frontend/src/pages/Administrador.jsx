import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const AdminPerfil = () => {
  return (
    <>
      <header>
      </header>

      <div className="container mt-4">
        <div className="profile-card text-center bg-white p-4 shadow rounded">
          <img
            src="perfis/adm.jpg"
            alt="Foto do Administrador"
            className="rounded-circle mb-3"
            width="100"
            height="100"
          />
          <h2>Danielle Souza</h2>
          <p>
            <em>
              "Responsável pela gestão da plataforma e por manter tudo
              funcionando perfeitamente."
            </em>
          </p>
          <button className="btn btn-primary">Editar Perfil</button>
        </div>

        <div className="info-section bg-white p-4 mt-4 shadow rounded">
          <h3 className="text-info">Informações Pessoais</h3>
          <p>
            <strong>Email:</strong> admin@nuvemlens.com
          </p>
          <p>
            <strong>Funções:</strong> Gerenciar usuários, revisar conteúdo,
            monitorar segurança.
          </p>
          <p>
            <strong>Localização:</strong> São Paulo, Brasil.
          </p>
          <p>
            <strong>Estilo de Gestão:</strong> Proativa, organizada e orientada
            a resultados.
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
