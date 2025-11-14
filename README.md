Aqui está um README técnico, claro e bonito, pronto para ser colocado no GitHub. Mantive linguagem profissional, organizada e direta — ideal para portfólio.

Loja de Café – Sistema de E-commerce

Este projeto é um sistema de e-commerce desenvolvido para uma loja de cafés especiais. A aplicação utiliza JavaScript puro para manipulação do DOM e simula um ambiente completo de compras, desde a listagem de produtos até a finalização do pedido.

Descrição Geral

A aplicação segue o modelo de SPA (Single Page Application), com carregamento dinâmico de dados obtidos via API REST. O usuário pode navegar pelos produtos, adicionar itens ao carrinho, revisar a compra e concluir o pedido com dados de entrega.

Funcionalidades
Página Inicial

Listagem dinâmica de produtos via API REST

Exibição de cards contendo nome, descrição, imagem e preço

Adição de produtos ao carrinho

Interface responsiva e organizada

Carrinho

Adição e remoção de itens

Controle de quantidade

Cálculo automático do valor total

Persistência via Web Storage API (localStorage)

Checkout

Formulário de entrega

Seleção de método de pagamento

Validação de campos obrigatórios

Tela de confirmação da compra

Tecnologias Utilizadas
Frontend

HTML5 – Estrutura semântica

CSS3 – Layout responsivo e estilização

JavaScript ES6+ – Lógica da aplicação e manipulação do DOM

Backend Simulado

JSON Server – Simulação de API REST local

LocalStorage – Persistência do carrinho

Estrutura do Projeto
projeto-cafe/
├── index.html       # Página principal
├── style.css        # Estilos da aplicação
├── script.js        # Lógica de interação e DOM
└── db.json          # Dados da API utilizada pelo JSON Server

Como Executar
Pré-requisitos

Node.js instalado

NPM ou Yarn

Instalação

Instalar o JSON Server:

npm install json-server

Iniciar servidor da API
npx json-server db.json --port 3000


A API ficará disponível em:

http://localhost:3000/coffee

Executar a aplicação

Abra o arquivo index.html utilizando um servidor web local
(Ex.: Live Server, http-server, etc.)

API – Endpoints
Cafés

GET /coffee — Lista todos os cafés

GET /coffee/{id} — Retorna um café específico

Formato dos Dados
{
  "id": 1,
  "title": "Nome do Café",
  "description": "Descrição detalhada",
  "price": 12.50,
  "image": "URL da imagem",
  "ingredients": ["ingrediente1", "ingrediente2"]
}

Principais Recursos Técnicos
Manipulação do DOM

Renderização dinâmica da lista de produtos

Atualização do carrinho em tempo real

Tratamento de eventos para botões e formulários

Gerenciamento de Estado

Controle do carrinho no localStorage

Sincronização entre UI e dados persistidos

Atualização automática de valores e quantidades

Validações

Campos obrigatórios no checkout

Controle de valores mínimos e máximos

Mensagens de feedback visual

Boas Práticas Aplicadas

Código organizado e modular

Separação de responsabilidades

Tratamento básico de erros

Zero dependências externas de JavaScript

Interface responsiva e consistente com tema de cafeteria
