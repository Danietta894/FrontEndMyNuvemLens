// src/components/Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 My NuvemLens. Todos os direitos reservados.</p>
      <div>
        <a href="#" className="text-white me-3">
          <FaFacebookF />
        </a>
        <a href="#" className="text-white me-3">
          <FaTwitter />
        </a>
        <a href="#" className="text-white">
          <FaInstagram />
        </a>
      </div>
      <small>Siga-nos nas redes sociais</small>
    </footer>
  );
}
