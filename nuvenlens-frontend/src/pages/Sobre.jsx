import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


export default function Sobre() {
  const [weather, setWeather] = useState('Carregando previsão do tempo...');

  useEffect(() => {
    const apiKey = '4224acfbc8bb00585d642c6ff1a360d0';

    if (document.getElementById('map')?._leaflet_id !== undefined) {
      return;
    }

    const map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);

    let marker;
    map.on('click', function (e) {
      if (marker) map.removeLayer(marker);
      marker = L.marker(e.latlng).addTo(map);
      document.getElementById('latitude').value = e.latlng.lat;
      document.getElementById('longitude').value = e.latlng.lng;
      document.getElementById('location').value = `Latitude: ${e.latlng.lat}, Longitude: ${e.latlng.lng}`;

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.latlng.lat}&lon=${e.latlng.lng}&appid=${apiKey}&units=metric&lang=pt_br`)
        .then((response) => response.json())
        .then((data) => {
          setWeather(`Clima atual: ${data.weather[0].description}, Temperatura: ${data.main.temp}°C`);
        })
        .catch((error) => console.error('Erro ao obter a previsão do tempo:', error));
    });
  }, []);

  return (
    <div>
      <section className="container my-5">
        <h2>Sobre Nós</h2>
        <p>
          O My NuvenLens é um espaço dedicado à observação, registro e partilha
          de fenômenos atmosféricos, feito por quem ama olhar para o céu. Aqui,
          cada nuvem tem história, cada imagem tem contexto, e cada observador
          se torna parte de uma comunidade que valoriza a ciência cidadã, a
          beleza natural e o conhecimento acessível. Criado com carinho por quem
          cresceu com os olhos voltados para o alto, o My NuvenLens conecta
          olhares atentos de diferentes regiões, ajudando a identificar,
          classificar e entender as formações de nuvens e seus significados
          meteorológicos, geográficos e culturais. Mais do que uma galeria de
          imagens, o My NuvenLens é um convite à contemplação com propósito:
          aprender com o céu, compartilhar descobertas e construir, juntos, uma
          enciclopédia viva das nuvens do Brasil e do mundo. Se você também para
          tudo para fotografar o céu, encontrou o lugar certo.{" "}
        </p>
      </section>

      <div className="container mt-4">
        <h2>O que dizem nossos usuários</h2>
        <div className="row">
          {[
            {
              nome: "Mariana Ribeiro",
              comentario:
                "Sempre amei fotografar o céu, mas nunca soube exatamente o que estava observando. Com o My NuvenLens, aprendi a identificar tipos de nuvens e ainda compartilho minhas fotos com pessoas que entendem esse amor. É como encontrar uma nova família!",
            },
            {
              nome: " Luiz Fernando",
              comentario:
                "Uso as imagens da comunidade My NuvemLens para enriquecer minhas aulas de geografia e meteorologia. A plataforma se tornou uma ponte entre ciência cidadã e educação, mostrando que todo mundo pode contribuir para a construção do conhecimento.",
            },
            {
              nome: "Rosa Martins",
              comentario:
                "Um dia, achei que tinha visto uma nuvem muito rara e postei no  My NuvemLens. Em poucas horas, outros usuários me ajudaram a identificar: era uma iridescência! A troca de saberes aqui é incrível, a gente aprende e ensina ao mesmo tempo.",
            },
          ].map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.nome}</h5>
                  <p className="card-text">{item.comentario}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="container max-width-600 container-transparent">
        <h2>Upload de Imagens</h2>
        <form
          className="form-container formestreito max-width-600"
          encType="multipart/form-data"
        >
          <div className="mb-3">
            <label htmlFor="imageFile" className="form-label">
              Selecione uma Imagem
            </label>
            <input
              type="file"
              className="form-control"
              id="imageFile"
              accept=".jpg, .jpeg, .png"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Local da Captura
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              required
            />
          </div>
          <input type="hidden" id="latitude" />
          <input type="hidden" id="longitude" />
          <div id="map" style={{ height: "300px" }}></div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Data e Hora
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="date"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Descrição
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar Imagem
          </button>
        </form>
      </section>

      <section className="container my-5 container-transparent" id="contato">
        <h2>Fale Conosco</h2>
        <form className="form-container formestreito">
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input type="text" className="form-control" id="nome" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="mensagem" className="form-label">
              Mensagem
            </label>
            <textarea
              className="form-control"
              id="mensagem"
              rows="6"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
