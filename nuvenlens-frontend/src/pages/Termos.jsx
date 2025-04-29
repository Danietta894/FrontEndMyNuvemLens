import React from "react";
import { Link } from "react-router-dom";

const TermosServico = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #d0e7f9, #f9fcff)",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#4A90E2",
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Termos de Serviço
      </h1>
      <p>
        Ao utilizar a plataforma NuvemLens, você concorda com os seguintes
        termos:
      </p>

      <h2 style={{ color: "#4A90E2", fontSize: "1.5rem", marginTop: "20px" }}>
        1. Uso da Plataforma
      </h2>
      <p>
        A plataforma destina-se a entusiastas de nuvens, permitindo o
        compartilhamento de fotos e análises meteorológicas.
      </p>

      <h2 style={{ color: "#4A90E2", fontSize: "1.5rem", marginTop: "20px" }}>
        2. Responsabilidade do Usuário
      </h2>
      <ul style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        <li>
          Garantir que todas as informações fornecidas sejam precisas e
          completas.
        </li>
        <li>Evitar o compartilhamento de conteúdo inadequado ou ofensivo.</li>
      </ul>

      <h2 style={{ color: "#4A90E2", fontSize: "1.5rem", marginTop: "20px" }}>
        3. Direitos da Plataforma
      </h2>
      <p>
        Reservamo-nos o direito de remover conteúdos que violem os termos ou
        sejam considerados inadequados.
      </p>

      <h2 style={{ color: "#4A90E2", fontSize: "1.5rem", marginTop: "20px" }}>
        4. Alterações nos Termos
      </h2>
      <p>
        Os termos podem ser alterados a qualquer momento. É responsabilidade do
        usuário verificar atualizações regularmente.
      </p>
    </div>
  );
};

export default TermosServico;
