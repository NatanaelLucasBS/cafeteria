☕ Loja de Café – Sistema de E-commerce

Sistema de e-commerce desenvolvido para uma loja de cafés especiais, utilizando HTML5, CSS3 e JavaScript puro.
A aplicação funciona como uma SPA (Single Page Application), carregando produtos via API REST e permitindo a simulação completa de uma compra online.

🚀 Visão Geral

A aplicação permite ao usuário navegar pelos produtos, adicionar itens ao carrinho, editar quantidades e finalizar a compra com preenchimento de dados de entrega e pagamento.
Todo o estado do carrinho é salvo no localStorage, garantindo persistência entre sessões.

📌 Funcionalidades
🏠 Página Inicial

Listagem dinâmica de produtos consumidos da API

Cards com foto, descrição, preço e ingredientes

Botão de compra integrado

Layout responsivo

🛒 Carrinho

Adicionar e remover produtos

Atualização automática de quantidades

Cálculo do subtotal e total

Persistência via Web Storage API

📦 Finalização da Compra

Formulário validado de endereço e pagamento

Verificação de campos obrigatórios

Tela de confirmação do pedido

🛠 Tecnologias Utilizadas
Frontend

HTML5

CSS3

JavaScript ES6+

Backend Simulado

JSON Server – Simulação de API REST

LocalStorage – Persistência do carrinho

📁 Estrutura do Projeto
projeto-cafe/
│── index.html        # Página principal
│── style.css         # Estilos gerais
│── script.js         # Lógica da aplicação
└── db.json           # Base de dados usada pelo JSON Server

⚙️ Como Executar
1. Pré-requisitos

Node.js

NPM ou Yarn

2. Instalar o JSON Server
npm install json-server

3. Iniciar o servidor da API
npx json-server db.json --port 3000


API disponível em:

http://localhost:3000/coffee

4. Rodar a aplicação

Abra o arquivo index.html usando um servidor local
(ex.: Live Server, http-server).

📡 Endpoints da API
Cafés
GET /coffee
GET /coffee/{id}

Modelo de Dados
{
  "id": 1,
  "title": "Nome do Café",
  "description": "Descrição detalhada",
  "price": 12.50,
  "image": "URL da imagem",
  "ingredients": ["ingrediente1", "ingrediente2"]
}

🔧 Recursos Técnicos Implementados
Manipulação do DOM

Renderização dinâmica

Eventos de clique

Atualização em tempo real da interface

Gerenciamento de Estado

Carrinho salvo no localStorage

Sincronização automática com a interface

Validação

Formulário de checkout

Regras de negócio para quantidades

Mensagens de feedback visual

🎨 Design e Experiência

Navegação intuitiva

Responsividade total

Tema visual inspirado em cafeterias

Feedback visual para todas as ações

📈 Possíveis Melhorias Futuras

Busca e filtros avançados

Sistema de avaliações

Cadastro e login de usuários

Histórico de pedidos

Integração com gateway de pagamento real
