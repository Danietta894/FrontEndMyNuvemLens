import { FiHeart, FiMessageCircle, FiSend, FiBookmark, FiFlag } from 'react-icons/fi';
import React from 'react';
import Card from '../components/Card';

const fotos = [
  {
    id: 1,
    src: '',
    titulo: 'Nuvens Cumulus',
    descricao: 'Formação típica de dias quentes e úmidos.'
  },
  {
    id: 2,
    src: '',
    titulo: 'Nuvens Cirrus',
    descricao: 'Altas e delicadas, indicam mudança no tempo.'
  },
  {
    id: 3,
    src: '',
    titulo: 'Nuvens Estratocumulus',
    descricao: 'Cobertura extensa com aparência de colcha de retalhos.', local: 'São Paulo, SP', data: '2024-01-01', tipo: 'Cumulonimbus'
  }
];

const Galeria = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4 text-primary">Nossa Galeria</h2>

      <div className="container mt-4 text-center">
        <label htmlFor="filter" className="fw-bold" style={{ color: "#4A90E2" }}>
          Filtrar por tipo de nuvem:
        </label>
        <select id="filter" className="form-select d-inline-block w-auto mx-2">
          <option value="all">Todos</option>
          <option value="Cumulonimbus">Cumulonimbus</option>
          <option value="Cumulus Congestus">Cumulus Congestus</option>
          <option value="Altocumulus">Altocumulus</option>
          <option value="Stratocumulus">Stratocumulus</option>
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
            <Card key={foto.id} foto={foto} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Galeria;
