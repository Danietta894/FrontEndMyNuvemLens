import React, { useState } from "react";
import { Link } from "react-router-dom";

const EsqueciSenha = () => {
  const [email, setEmail] = useState("");
  const [mensagemConfirmacao, setMensagemConfirmacao] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      setMensagemConfirmacao(true);
      setEmail("");
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center min-vh-100"
      style={{
        background: "linear-gradient(to bottom, #d0e7f9, #f9fcff)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        className="reset-container bg-white p-4 rounded shadow text-center"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-primary mb-3">Esqueci Minha Senha</h2>
        <p>Digite seu e-mail para receber um link de redefinição de senha.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-100">
            Enviar Link
          </button>
        </form>

        {mensagemConfirmacao && (
          <div className="text-success mt-3">
            Um link foi enviado para o seu e-mail! Verifique sua caixa de
            entrada.
          </div>
        )}

        <div className="back-links mt-3">
          <Link to="/login">Voltar para o Login</Link> |{" "}
          <Link to="/login">Cadastrar-se</Link>
        </div>
      </div>
    </div>
  );
};

export default EsqueciSenha;
