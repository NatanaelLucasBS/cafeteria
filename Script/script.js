// API
async function pegarDadosDaApi(urlDaApi) {
  try {
    const resposta = await fetch(urlDaApi);

    if (!resposta.ok) {
      throw new Error(`Deu erro: ${resposta.status}`);
    }

    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    console.error("Erro ao buscar os dados:", erro);
    throw erro;
  }
}


function pegarCarrinho() {
  return JSON.parse(localStorage.getItem('carrinho')) || [];
}

function salvarCarrinho(carrinho) {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function atualizarContadorCarrinho() {
  const carrinho = pegarCarrinho();
  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
  const contadorCarrinho = document.getElementById('contadorCarrinho');
  if (contadorCarrinho) {
    contadorCarrinho.textContent = totalItens;
  }
}

function adicionarAoCarrinho(produto) {
  let carrinho = pegarCarrinho();
  const itemExistente = carrinho.find(item => item.id === produto.id);
  
  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({
      id: produto.id,
      titulo: produto.title,
      preco: produto.price,
      imagem: produto.image,
      quantidade: 1
    });
  }
  
  salvarCarrinho(carrinho);
  atualizarContadorCarrinho();
  
}

// cabeç
function criarCabecalho() {
  const cabecalho = document.createElement('div');
  cabecalho.className = 'cabecalho';
  cabecalho.innerHTML = `
    <div class="conteudo-cabecalho">
      <a href="#" class="logo" onclick="mostrarPaginaInicial()">café do natan</a>
      <div class="carrinho-cabecalho">
        <a href="#" class="link-carrinho" onclick="mostrarPaginaCarrinho()">
           Carrinho 
          <span class="contador-carrinho" id="contadorCarrinho">0</span>
        </a>
      </div>
    </div>
  `;
  
  const cabecalhoExistente = document.querySelector('.cabecalho');
  if (cabecalhoExistente) {
    cabecalhoExistente.remove();
  }
  
  document.body.insertBefore(cabecalho, document.body.firstChild);
  atualizarContadorCarrinho();
}

// Pg inici
function mostrarPaginaInicial() {
  const root = document.getElementById('root');
  root.innerHTML = '<div class="container-produtos" id="containerProdutos"></div>';
  
  criarCabecalho();
  
  const endpointApi = "http://localhost:3000/coffee";
  pegarDadosDaApi(endpointApi)
    .then((dados) => {
      const container = document.getElementById('containerProdutos');
      dados.forEach(cafe => {
        const card = criarCard(cafe);
        container.appendChild(card);
      });
    })
    .catch((erro) => {
      const container = document.getElementById('containerProdutos');
      container.innerHTML = '<p>Erro ao carregar os cafés. Ve se o servidor ta ligado.</p>';
    });
}

function criarCard(dados) {
  const card = document.createElement("div");
  card.className = "estilo-card";

  const imagem = document.createElement("img");
  imagem.src = dados.image;
  imagem.alt = dados.title;
  imagem.className = "estilo-imagem";
  card.appendChild(imagem);

  const titulo = document.createElement("h3");
  titulo.textContent = dados.title;
  titulo.className = "estilo-titulo";
  card.appendChild(titulo);

  const descricao = document.createElement("p");
  descricao.textContent = dados.description;
  descricao.className = "estilo-descricao";
  card.appendChild(descricao);

  if (dados.ingredients && dados.ingredients.length > 0) {
    const tituloIngredientes = document.createElement("h4");
    tituloIngredientes.textContent = "Ingredientes:";
    tituloIngredientes.className = "estilo-titulo-ingredientes";
    card.appendChild(tituloIngredientes);

    const listaIngredientes = document.createElement("ul");
    listaIngredientes.className = "estilo-lista-ingredientes";

    dados.ingredients.forEach((ingrediente) => {
      const itemIngrediente = document.createElement("li");
      itemIngrediente.textContent = ingrediente;
      itemIngrediente.className = "estilo-item-ingrediente";
      listaIngredientes.appendChild(itemIngrediente);
    });
    card.appendChild(listaIngredientes);
  }

  if(dados.price){
    const preco = document.createElement("div");
    preco.textContent = `R$ ${dados.price}`;
    preco.className = "estilo-preco";
    card.appendChild(preco);
  }

  const botaoCarrinho = document.createElement("button");
  botaoCarrinho.textContent = "add carrinho";
  botaoCarrinho.className = "botao-adicionar-carrinho";
  botaoCarrinho.addEventListener("click", () => adicionarAoCarrinho(dados));
  card.appendChild(botaoCarrinho);

  return card;
}

// Pg car
function mostrarPaginaCarrinho() {
  const root = document.getElementById('root');
  root.innerHTML = '<div class="container-carrinho" id="containerCarrinho"></div>';
  
  criarCabecalho();
  mostrarItensCarrinho();
}

function mudarQuantidade(idProduto, mudanca) {
  let carrinho = pegarCarrinho();
  const indiceItem = carrinho.findIndex(item => item.id === idProduto);
  
  if (indiceItem !== -1) {
    carrinho[indiceItem].quantidade += mudanca;
    
    if (carrinho[indiceItem].quantidade <= 0) {
      carrinho.splice(indiceItem, 1);
    }
    
    salvarCarrinho(carrinho);
    mostrarItensCarrinho();
    atualizarContadorCarrinho();
  }
}

function mostrarItensCarrinho() {
  const container = document.getElementById('containerCarrinho');
  const carrinho = pegarCarrinho();
  
  let html = '<h2>Seu Carrinho</h2>';
  
  if (carrinho.length === 0) {
    html += '<p class="carrinho-vazio">Carrinho ta vazio</p>';
  } else {
    let total = 0;
    
    carrinho.forEach(item => {
      const totalItem = item.preco * item.quantidade;
      total += totalItem;
      
      html += `
        <div class="item-carrinho">
          <img src="${item.imagem}" alt="${item.titulo}" class="imagem-item-carrinho">
          <div class="detalhes-item-carrinho">
            <h4>${item.titulo}</h4>
            <p>R$ ${item.preco}</p>
            <div class="controles-quantidade">
              <button onclick="mudarQuantidade(${item.id}, -1)">-</button>
              <span>${item.quantidade}</span>
              <button onclick="mudarQuantidade(${item.id}, 1)">+</button>
            </div>
          </div>
        </div>
      `;
    });
    
    html += `
      <div class="total-carrinho">
        <strong>Total: R$ ${total}</strong>
      </div>
      <button class="botao-finalizar" onclick="mostrarPaginaFinalizar()">Finalizar Compra</button>
    `;
  }
  
  container.innerHTML = html;
}

// Pg final
function mostrarPaginaFinalizar() {
  const root = document.getElementById('root');
  root.innerHTML = '<div class="container-finalizar" id="containerFinalizar"></div>';
  
  criarCabecalho();
  mostrarPaginaFinalizacao();
}

function mostrarPaginaFinalizacao() {
  const container = document.getElementById('containerFinalizar');
  const carrinho = pegarCarrinho();
  
  let html = `
    <h2>Finalizar Compra</h2>
    
    <div class="itens-finalizar">
      <h3>Itens do Pedido</h3>
  `;
  
  if (carrinho.length === 0) {
    html += '<p class="carrinho-vazio">Carrinho vazio</p>';
  } else {
    let total = 0;
    carrinho.forEach(item => {
      const totalItem = item.preco * item.quantidade;
      total += totalItem;
      html += `<p>${item.titulo} - ${item.quantidade}x - R$ ${totalItem}</p>`;
    });
    html += `<strong>Total: R$ ${total}</strong>`;
  }
  
  html += `
    </div>
    
    <form class="formulario-finalizar">
      <div class="grupo-form">
        <label for="endereco">Onde entregar:</label>
        <input type="text" id="endereco" required>
      </div>
      
      <div class="grupo-form">
        <label for="pagamento">Forma de pagamento:</label>
        <select id="pagamento" required>
          <option value="">Escolha:</option>
          <option value="cartao">Cartão</option>
          <option value="boleto">Boleto</option>
          <option value="pix">PIX</option>
        </select>
      </div>
      
      <button type="button" onclick="finalizarTudo()" class="botao-finalizar">
        Finalizar Compra
      </button>
    </form>
  `;
  
  container.innerHTML = html;
}

function finalizarTudo() {
  const endereco = document.getElementById('endereco').value;
  const pagamento = document.getElementById('pagamento').value;
  
  if (!endereco || !pagamento) {
    alert('Preencha todos os campos corretamente!');
    return;
  }
  
  const carrinho = pegarCarrinho();
  let total = 0;
  carrinho.forEach(item => {
    total += item.preco * item.quantidade;
  });
  
 
  const mensagem = `
    Pedido confirmado!
    
    Total: R$ ${total.toFixed(2)}
    Endereço: ${endereco}
    Pagamento: ${pagamento.toUpperCase()}
    
    Obrigado pela Compra!
  `;
  
  alert(mensagem);
  
  
  localStorage.removeItem('carrinho');
  mostrarPaginaInicial();
}


document.addEventListener('DOMContentLoaded', function() {
  mostrarPaginaInicial();
});