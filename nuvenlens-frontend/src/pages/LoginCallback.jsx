import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginCallback() {
  const navigate = useNavigate();

  useEffect(() => {
      console.log(window.location.search);
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const name = urlParams.get("name");

    if (token) {
      // Salvar no localStorage (ou Context, Redux, etc.)
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      console.log(token);

      alert(`Seja bem-vindo(a), ${name}!`);

      // Redireciona para a galeria, perfil ou onde desejar
      navigate("/galeria");
    } else {
      alert("Erro ao realizar login.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <h2>Processando login...</h2>
    </div>
  );
}

export default LoginCallback;
