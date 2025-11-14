# ☕ Loja de Café – Sistema de E-commerce

Sistema de e-commerce desenvolvido para uma loja de cafés especiais, utilizando **HTML5**, **CSS3** e **JavaScript puro**.  
A aplicação funciona como uma **SPA**, consumindo dados via API REST e simulando um fluxo completo de compras.

---

## 🚀 Visão Geral

A aplicação permite:

- Listar cafés via API  
- Adicionar itens ao carrinho  
- Editar quantidades  
- Finalizar compra com validação  
- Persistir dados via localStorage  

---

## 📌 Funcionalidades

### 🏠 Página Inicial
- Listagem dinâmica de produtos  
- Cards com descrição, preço e imagem  
- Botão de compra  
- Interface responsiva  

### 🛒 Carrinho
- Adição e remoção de itens  
- Controle de quantidades  
- Cálculo automático do total  
- Persistência em localStorage  

### 📦 Checkout
- Formulário de dados de entrega  
- Seleção de método de pagamento  
- Validação de campos  
- Confirmação da compra  

---

## 🛠 Tecnologias Utilizadas

**Frontend**
- HTML5  
- CSS3  
- JavaScript ES6+  

**Backend Simulado**
- JSON Server  
- LocalStorage  

---

## 📁 Estrutura do Projeto

```txt
projeto-cafe/
│── index.html        # Página principal
│── style.css         # Estilos da aplicação
│── script.js         # Lógica JavaScript
└── db.json           # API simulada (JSON Server)
⚙️ Como Executar
1. Pré-requisitos
Node.js

NPM ou Yarn

2. Instalar JSON Server
bash
Copiar código
npm install json-server
3. Iniciar o servidor da API
bash
Copiar código
npx json-server db.json --port 3000
A API ficará disponível em:

bash
Copiar código
http://localhost:3000/coffee
4. Rodar a aplicação
Abra o arquivo index.html usando um servidor local
(ex.: Live Server).

📡 Endpoints da API
Cafés
http
Copiar código
GET /coffee
GET /coffee/{id}
Exemplo de Dados
json
Copiar código
{
  "id": 1,
  "title": "Nome do Café",
  "description": "Descrição detalhada",
  "price": 12.50,
  "image": "URL da imagem",
  "ingredients": ["ingrediente1", "ingrediente2"]
}
🔧 Recursos Técnicos
Manipulação do DOM
Renderização dinâmica

Eventos de clique

Atualização do carrinho em tempo real

Gerenciamento de Estado
Carrinho salvo em localStorage

Sincronização entre UI e dados

Validações
Campos obrigatórios no checkout

Controle de quantidades

Feedback visual

🎨 UX/UI
Navegação fluida

Interface responsiva

Feedback visual imediato

Design inspirado em cafeterias

📈 Melhorias Futuras
Filtro e busca por cafés

Avaliação e comentários

Histórico de pedidos

Autenticação de usuários

Integração com gateway de pagamento
