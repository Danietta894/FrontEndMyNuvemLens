import React from "react";
import { Link } from "react-router-dom";

const PoliticaPrivacidade = () => {
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
        Política de Privacidade
      </h1>

      <p>
        Sua privacidade é importante para nós. Veja como tratamos suas
        informações:
      </p>

      <h2 style={{ color: "#4A90E2", fontSize: "1.5rem", marginTop: "20px" }}>
        1. Coleta de Dados
      </h2>
      <p>
        Coletamos informações como nome, e-mail, localização e fotos enviadas
        para melhorar sua experiência.
      </p>

      <h2 style={{ color: "#4A90E2", fontSize: "1.5rem", marginTop: "20px" }}>
        2. Uso dos Dados
      </h2>
      <ul style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        <li>
          Os dados são utilizados para criação de contas e aprimoramento de
          serviços.
        </li>
        <li>Dados anônimos podem ser usados para análises internas.</li>
      </ul>

      <h2 style={{ color: "#4A90E2", fontSize: "1.5rem", marginTop: "20px" }}>
        3. Segurança
      </h2>
      <p>
        Adotamos medidas de segurança avançadas para proteger seus dados contra
        acessos não autorizados.
      </p>

      <h2 style={{ color: "#4A90E2", fontSize: "1.5rem", marginTop: "20px" }}>
        4. Direitos do Usuário
      </h2>
      <p>
        Você pode solicitar a exclusão ou atualização de suas informações a
        qualquer momento, entrando em contato com nosso suporte.
      </p>
    </div>
  );
};

export default PoliticaPrivacidade;
