import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UploadContato() {
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

      <section id="upload" className="container max-w-400 my-5 container-transparent"    >
        <h2>Upload de Imagens</h2>
        <form className="form-container formestreito max-width-600" encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="imageFile" className="form-label">Selecione uma Imagem (JPEG, PNG)</label>
            <input type="file" className="form-control" id="imageFile" accept=".jpg, .jpeg, .png" required />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Local da Captura</label>
            <input type="text" className="form-control" id="location" placeholder="Digite o local ou clique no mapa" required />
          </div>
          <input type="hidden" id="latitude" name="latitude" />
          <input type="hidden" id="longitude" name="longitude" />
          <div id="map" className="col-md-12 mb-3" style={{ height: '300px' }}></div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Data e Hora da Captura</label>
            <input type="datetime-local" className="form-control" id="date" required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Descrição da Imagem</label>
            <textarea className="form-control" id="description" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar Imagem</button>
        </form>
      </section>

      <section id="contato" className="container my-5 container-transparent">
        <h2>Fale Conosco</h2>
        <form className="form-container formestreito max-width-600" encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="nome" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="mensagem" className="form-label">Mensagem</label>
            <textarea className="form-control" id="mensagem" rows="6" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </section>
    </div>
  );
}
