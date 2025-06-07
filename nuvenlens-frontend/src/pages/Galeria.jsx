import React, { useEffect, useRef, useState } from "react";
import Card from "../components/Card";

const Galeria = () => {
  const [fotos, setFotos] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [temMais, setTemMais] = useState(true);
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const fotosPorPagina = 3;
  const carregandoRef = useRef(false);
  const sentinelaRef = useRef(null);

  const fetchFotos = async (pagina, tipo) => {
    if (carregandoRef.current || !temMais) return;
    carregandoRef.current = true;

    try {
      const params = new URLSearchParams({
        pagina,
        limite: fotosPorPagina,
      });
      if (tipo) params.append("tipo", tipo);

      const resposta = await fetch(
        `http://localhost:3000/api/fotos?${params.toString()}`
      );

      if (!resposta.ok) throw new Error("Erro ao buscar fotos");

      const dados = await resposta.json();

      setFotos((prev) => [
        ...prev,
        ...dados.map((foto) => ({
          ...foto,
          src: "http://localhost:3000" + foto.url,
        })),
      ]);

      if (dados.length < fotosPorPagina) {
        setTemMais(false);
      }
    } catch (error) {
      console.error("Erro ao carregar fotos:", error);
    } finally {
      carregandoRef.current = false;
    }
  };

  // Quando a página ou o filtro mudam, busca as fotos
  useEffect(() => {
    fetchFotos(paginaAtual, tipoSelecionado);
  }, [paginaAtual, tipoSelecionado]);

  // Quando muda o filtro, reinicia tudo corretamente
  const handleTipoSelecionado = (tipo) => {
    setFotos([]);
    setTemMais(true);
    setPaginaAtual(1);
    setTipoSelecionado(tipo);
  };

  // Scroll infinito
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !carregandoRef.current && temMais) {
          setPaginaAtual((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    const sentinela = sentinelaRef.current;
    if (sentinela) observer.observe(sentinela);

    return () => {
      if (sentinela) observer.unobserve(sentinela);
    };
  }, [temMais]);

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4 text-primary">Nossa Galeria</h2>

      <div className="container mt-4 text-center">
        <label
          htmlFor="filter"
          className="fw-bold"
          style={{ color: "#4A90E2" }}
        >
          Filtrar por tipo de nuvem:
        </label>
        <select
          id="filter"
          className="form-select d-inline-block w-auto mx-2"
          value={tipoSelecionado}
          onChange={(e) => handleTipoSelecionado(e.target.value)}
        >
          <option value="">Todos</option>

          <optgroup label="Altas">
            <option value="Cirrus">Cirrus</option>
            <option value="Cirrostratus">Cirrostratus</option>
            <option value="Cirrocumulus">Cirrocumulus</option>
          </optgroup>

          <optgroup label="Médias">
            <option value="Altostratus">Altostratus</option>
            <option value="Altocumulus">Altocumulus</option>
          </optgroup>

          <optgroup label="Baixas">
            <option value="Stratus">Stratus</option>
            <option value="Stratocumulus">Stratocumulus</option>
            <option value="Nimbostratus">Nimbostratus</option>
          </optgroup>

          <optgroup label="Desenvolvimento vertical">
            <option value="Cumulus">Cumulus</option>
            <option value="Cumulus Congestus">Cumulus Congestus</option>
            <option value="Cumulonimbus">Cumulonimbus</option>
          </optgroup>
        </select>

        <div className="upload-button d-inline-block">
          <a href="/upload" className="btn btn-success rounded-pill">
            <i className="fas fa-cloud-upload-alt"></i> Enviar Imagem
          </a>
        </div>
      </div>

      <section className="container bg-light mt-4 pt-5 rounded-5" id="galeria">
        <div className="row">
          {fotos.map((foto) => (
            <Card key={foto.id} foto={foto} comentarios curtidas />
          ))}
        </div>

        {temMais && (
          <div
            ref={sentinelaRef}
            style={{ height: "30px" }}
            className="text-center my-3"
          >
            <span>Carregando mais...</span>
          </div>
        )}

        {!temMais && fotos.length === 0 && (
          <div className="text-center text-muted my-3">
            Nenhuma imagem encontrada para esse tipo.
          </div>
        )}

        {!temMais && fotos.length > 0 && (
          <div className="text-center text-muted my-3">
            Todas as imagens foram carregadas.
          </div>
        )}
      </section>
    </section>
  );
};

export default Galeria;
