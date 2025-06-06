# Frontend - My NuvemLens

Este repositório contém o frontend da plataforma **My NuvemLens**, um sistema colaborativo para observação, registro e compartilhamento de nuvens com dados meteorológicos em tempo real.

## Sobre o Projeto

A My NuvemLens permite que usuários façam upload de imagens de nuvens, vejam informações climáticas no momento do registro e interajam com uma galeria pública com curtidas, comentários e denúncias. A proposta une tecnologia, ciência cidadã e educação ambiental.

## Funcionalidades

- Upload de imagens com tipo de nuvem, localização e clima automático
- Galeria pública com filtros por tipo de nuvem
- Autenticação via Google e e-mail
- Perfis de usuário com histórico de uploads
- Interação com curtidas, comentários e denúncias
- Painel de moderação para validar imagens

## Tecnologias Utilizadas

- React  
- React Router  
- Axios (requisições HTTP)  
- Tailwind CSS  
- OpenWeatherMap API (clima em tempo real)  
- Google OAuth 2.0 (login social)

## Como Executar o Projeto

### Pré-requisitos:
- Node.js instalado
- API (backend) rodando localmente ou hospedada

### Passos:

1. Clone este repositório:

```bash
git clone https://github.com/Danietta894/mynuvemlens.git
cd mynuvemlens
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` e configure a URL da API:

```env
REACT_APP_API_URL=http://localhost:3000
REACT_APP_GOOGLE_CLIENT_ID=seu_client_id_google
```

4. Execute o projeto:

```bash
npm start
```

O frontend estará acessível em: `http://localhost:5173` (ou `http://localhost:3000`, dependendo da porta configurada).

## Testes

- Testes manuais de usabilidade e fluxo com diferentes perfis
- Upload de imagens simuladas com API de clima integrada
- Navegação e filtros testados em diferentes resoluções (responsividade)

## Backend

A API (backend) está disponível neste repositório:  
 [API - My NuvemLens](https://github.com/Danietta894/API)

## Demonstração

Confira o vídeo da aplicação em funcionamento:  
🎥 [Acessar no Google Drive](https://drive.google.com/drive/folders/1v2yOq2h7IxqkmguCXe9tFR3N6VZ1_VVB?sort=13&direction=a)

## Desenvolvedora

- **Daniella Nunes Tenório**  
[GitHub](https://github.com/Danietta894)

## Licença

Este projeto está licenciado sob a Licença MIT.

