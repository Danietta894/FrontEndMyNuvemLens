import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CookieModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookieAccepted) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", true);
    setShow(false);
  };

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header
        style={{ backgroundColor: "#4A90E2", color: "white" }}
        closeButton
      >
        <Modal.Title>Aceitação de Cookies</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Utilizamos cookies para melhorar sua experiência em nossa plataforma. Ao
        continuar navegando, você concorda com o uso de cookies.
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Link
          to="/politica"
          className="btn btn-link text-primary text-decoration-underline"
        >
          Saiba mais
        </Link>
        <Button
          variant="primary"
          style={{ backgroundColor: "#4A90E2", border: "none" }}
          onClick={handleAccept}
        >
          Aceitar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CookieModal;
