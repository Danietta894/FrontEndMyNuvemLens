import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditarPerfil = () => {
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    bio: "",
    interesses: "",
    projetos: "",
    localizacao: "",
    estiloPerfil: "",
    fotoPerfil: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuario = async () => {
      const token = localStorage.getItem("token");

      if (!token) return navigate("/login");

      try {
        const resposta = await fetch(
          "http://localhost:3000/api/perfilusuario",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const dados = await resposta.json();
        setUsuario(dados.usuario);
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
        navigate("/login");
      }
    };

    fetchUsuario();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const resposta = await fetch("http://localhost:3000/api/perfilusuario", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(usuario),
      });

      if (resposta.ok) {
        alert("Perfil atualizado com sucesso!");
        navigate("/perfilUsuario");
      } else {
        alert("Erro ao atualizar perfil.");
      }
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro de conexão.");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Editar Perfil</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label>Bio:</label>
          <textarea
            name="bio"
            value={usuario.bio}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Interesses:</label>
          <input
            type="text"
            name="interesses"
            value={usuario.interesses}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Projetos:</label>
          <input
            type="text"
            name="projetos"
            value={usuario.projetos}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Localização:</label>
          <input
            type="text"
            name="localizacao"
            value={usuario.localizacao}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Estilo de Perfil:</label>
          <input
            type="text"
            name="estiloPerfil"
            value={usuario.estiloPerfil}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Foto de Perfil (URL):</label>
          <input
            type="text"
            name="fotoPerfil"
            value={usuario.fotoPerfil}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Salvar Alterações
        </button>
      </form>
    </div>
  );
};

export default EditarPerfil;
