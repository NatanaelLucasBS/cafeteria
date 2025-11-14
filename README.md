Loja de Café - Sistema de E-commerce
Descrição do Projeto
Sistema de e-commerce desenvolvido para uma loja de cafés especiais, implementado com JavaScript puro para manipulação do DOM. O projeto consiste em uma aplicação web de página única (SPA) que simula um ambiente de compras online completo.

Funcionalidades Principais
Página Inicial
Listagem dinâmica de produtos obtidos via API REST

Exibição de cards com informações completas dos cafés

Sistema de adição de produtos ao carrinho

Interface responsiva e intuitiva

Gerenciamento de Carrinho
Adição e remoção de produtos

Controle de quantidades

Cálculo automático do total

Persistência de dados via Web Storage API

Processo de Finalização
Formulário de dados de entrega

Seleção de método de pagamento

Validação de campos obrigatórios

Confirmação visual da compra

Tecnologias Utilizadas
Frontend
HTML5 - Estrutura semântica

CSS3 - Estilização e layout responsivo

JavaScript ES6+ - Lógica de aplicação e manipulação do DOM

Backend Simulado
JSON Server - API REST local para simulação de backend

LocalStorage - Persistência de dados do carrinho

Estrutura do Projeto
text
projeto-cafe/
├── index.html          # Página principal
├── style.css           # Estilos da aplicação
├── script.js           # Lógica JavaScript
└── db.json            # Dados da API (JSON Server)
Configuração e Execução
Pré-requisitos
Node.js instalado

NPM ou Yarn como gerenciador de pacotes

Instalação e Execução
Instalar dependências:

bash
npm install json-server
Iniciar servidor da API:

bash
npx json-server db.json --port 3000
Acessar a aplicação:

Abrir index.html em um servidor web local

A API estará disponível em: http://localhost:3000/coffee

API Endpoints
Cafés
GET /coffee - Lista todos os cafés disponíveis

GET /coffee/{id} - Obtém um café específico

Estrutura dos Dados
json
{
  "id": 1,
  "title": "Nome do Café",
  "description": "Descrição detalhada",
  "price": 12.50,
  "image": "URL da imagem",
  "ingredients": ["ingrediente1", "ingrediente2"]
}
Funcionalidades Técnicas
Manipulação do DOM
Criação dinâmica de elementos

Gerenciamento de eventos

Atualização em tempo real da interface

Gerenciamento de Estado
Armazenamento local do carrinho

Sincronização entre componentes

Persistência de sessão

Validações
Campos obrigatórios no checkout

Controle de quantidades

Feedback visual para o usuário

Características de Desenvolvimento
Código modular e organizado

Separação de responsabilidades

Tratamento de erros

Interface responsiva

Sem dependências externas de JavaScript

Considerações de UX/UI
Navegação intuitiva entre seções

Feedback visual imediato das ações

Design coerente com o tema de cafeteria

Experiência mobile-friendly

Próximas Melhorias
Implementação de busca e filtros

Sistema de avaliação de produtos

Histórico de pedidos

Integração com gateway de pagamento real

Sistema de autenticação de usuários
