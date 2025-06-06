import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [mostrarEsqueciSenha, setMostrarEsqueciSenha] = useState(false);

  const [erroCadastro, setErroCadastro] = useState(null);
  const [sucessoCadastro, setSucessoCadastro] = useState(null);
  const [sucessoLogin, setSucessoLogin] = useState(null);
  const [erroLogin, setErroLogin] = useState(null);
  const [erroEsqueciSenha, setErroEsqueciSenha] = useState(null);
  const [sucessoEsqueciSenha, setSucessoEsqueciSenha] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = document.querySelector("input[name=loginemail]").value;
    const senha = document.querySelector("input[name=loginsenha]").value;

    try {
      const resposta = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        localStorage.setItem("token", dados.token);
        setSucessoLogin(dados.message || "Login bem-sucedido!");

        window.location.href = "/perfilUsuario";
      } else {
        setErroLogin(dados.error || "Erro ao fazer login. Tente novamente.");
        if (resposta.status === 401) {
          setErroLogin("Email ou senha incorretos.");
        }
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErroLogin("Erro de conexão com o servidor.");
    }
  };

  const handleCadastro = async (event) => {
    setErroCadastro(null);
    setSucessoCadastro(null);
    event.preventDefault();
    const email = document.querySelector("input[name=cadastroemail]").value;
    const senha = document.querySelector("input[name=cadastrosenha]").value;
    const nome = document.querySelector("input[name=cadastronome]").value;

    try {
      const resposta = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha, nome }),
      });

      if (!resposta.ok) {
        const erro = await resposta.json();
        setErroCadastro(erro.error || "Erro ao cadastrar. Tente novamente.");
        return;
      }

      const dados = await resposta.json();
      setSucessoCadastro(dados.message);
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setErroCadastro("Erro de conexão com o servidor.");
    }
  };

  const handleEsqueciSenha = async (event) => {
    event.preventDefault();
    const email = document.querySelector("input[name=esqueciemail]").value;

    try {
      const resposta = await fetch(
        "http://localhost:3000/api/auth/esquecisenha",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const dados = await resposta.json();

      if (resposta.ok) {
        setSucessoEsqueciSenha(
          dados.message || "Verifique seu e-mail para redefinir a senha."
        );
        setErroEsqueciSenha(null);
      } else {
        setErroEsqueciSenha(
          dados.error || "Erro ao solicitar recuperação de senha."
        );
        setSucessoEsqueciSenha(null);
      }
    } catch (error) {
      console.error("Erro ao solicitar recuperação de senha:", error);
      setErroEsqueciSenha("Erro de conexão com o servidor.");
      setSucessoEsqueciSenha(null);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #d0e7f9, #f9fcff)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        margin: 0,
      }}
    >
      <div
        className="login-container bg-white p-4 rounded shadow text-center w-100"
        style={{ maxWidth: "350px" }}
      >
        <div className="login-logo mb-3">
          <img
            src="nuvens/logo1 (1).jpg"
            alt="NuvemLens Logo"
            width="120"
            height="90"
          />
        </div>
        <h5>Bem-vindo(a) à My NuvemLens</h5>
        <p style={{ fontSize: "14px" }}>
          Faça login para acessar ou cadastre-se para começar sua jornada com as
          nuvens!
        </p>

        {/* Botões sociais (opcional) */}
        <a
          href="http://localhost:3000/api/auth/google"
          className="btn btn-social btn-google mb-2"
        >
          <img
            src="nuvens/Google__G__logo.svg.png"
            alt="Google"
            width="18"
            className="me-2"
          />
          Entrar com Google
        </a>
        <button
          className="btn btn-social btn-facebook mb-2 text-white"
          style={{ backgroundColor: "#1877f2" }}
        >
          <img
            src="nuvens/Facebook_logo_(square).png"
            alt="Facebook"
            width="18"
            className="me-2"
          />
          Entrar com Facebook
        </button>
        <button
          className="btn btn-social btn-apple mb-2 text-white"
          style={{ backgroundColor: "#000" }}
        >
          <img src="nuvens/apple.jpg" alt="Apple" width="18" className="me-2" />
          Entrar com Apple
        </button>

        <div className="divider my-3 d-flex align-items-center">
          <div className="flex-grow-1 border-top"></div>
          <div className="mx-2 small text-muted">ou</div>
          <div className="flex-grow-1 border-top"></div>
        </div>

        <ul className="nav nav-tabs justify-content-center mb-3">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "login" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("login");
                setMostrarEsqueciSenha(false);
              }}
              style={{ fontSize: "14px" }}
            >
              Login
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("signup");
                setMostrarEsqueciSenha(false);
              }}
              style={{ fontSize: "14px" }}
            >
              Cadastro
            </button>
          </li>
        </ul>

        {/* Formulário de Login */}
        {activeTab === "login" && !mostrarEsqueciSenha && (
          <form onSubmit={handleLogin}>
            {sucessoLogin && (
              <div className="alert alert-success" role="alert">
                {sucessoLogin}
              </div>
            )}
            {erroLogin && (
              <div className="alert alert-danger" role="alert">
                {erroLogin}
              </div>
            )}
            <div className="mb-2">
              <input
                type="email"
                className="form-control"
                name="loginemail"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="form-control"
                name="loginsenha"
                placeholder="Senha"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Entrar
            </button>
            <p
              onClick={() => setMostrarEsqueciSenha(true)}
              className="d-block mt-2"
              style={{ fontSize: "12px", color: "#4A90E2", cursor: "pointer" }}
            >
              Esqueci Minha Senha
            </p>
          </form>
        )}

        {/* Formulário de Esqueci Senha */}
        {activeTab === "login" && mostrarEsqueciSenha && (
          <form onSubmit={handleEsqueciSenha}>
            <h6 className="mb-3">Recuperar Senha</h6>
            {sucessoEsqueciSenha && (
              <div className="alert alert-success" role="alert">
                {sucessoEsqueciSenha}
              </div>
            )}
            {erroEsqueciSenha && (
              <div className="alert alert-danger" role="alert">
                {erroEsqueciSenha}
              </div>
            )}
            <div className="mb-2">
              <input
                type="email"
                className="form-control"
                name="esqueciemail"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2">
              Enviar Link
            </button>
            <button
              type="button"
              className="btn btn-secondary w-100"
              onClick={() => setMostrarEsqueciSenha(false)}
            >
              Voltar
            </button>
          </form>
        )}

        {/* Formulário de Cadastro */}
        {activeTab === "signup" && (
          <form onSubmit={handleCadastro}>
            {erroCadastro && (
              <div className="alert alert-danger" role="alert">
                {erroCadastro}
              </div>
            )}
            {sucessoCadastro && (
              <div className="alert alert-success" role="alert">
                {sucessoCadastro}
              </div>
            )}
            <div className="mb-2">
              <label className="form-label">Nome:</label>
              <input
                type="text"
                className="form-control"
                name="cadastronome"
                placeholder="Nome Completo"
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label">E-mail:</label>
              <input
                type="email"
                className="form-control"
                name="cadastroemail"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Senha:</label>
              <input
                type="password"
                className="form-control"
                name="cadastrosenha"
                placeholder="Senha"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Cadastrar
            </button>
          </form>
        )}

        {/* Seção informativa */}
        <div className="info-section text-start mt-3 small text-muted">
          <h6>Por que usar o My NuvemLens?</h6>
          <ul>
            <li>Compartilhe suas fotos de nuvens com a comunidade.</li>
            <li>Explore padrões meteorológicos únicos.</li>
            <li>Conecte-se com outros entusiastas do céu.</li>
          </ul>
          <p>
            Ao entrar, você concorda com nossos{" "}
            <a href="termos">Termos de Serviço</a> e{" "}
            <a href="politica">Política de Privacidade</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
