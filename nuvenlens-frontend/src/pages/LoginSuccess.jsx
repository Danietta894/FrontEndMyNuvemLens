import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const name = urlParams.get("name");
    
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      window.location.href = "/perfilUsuario";
    } else {
    }
  }, [navigate]);

  return (
    <div>
      <h2>Processando login...</h2>
    </div>
  );
}

export default LoginSuccess;
