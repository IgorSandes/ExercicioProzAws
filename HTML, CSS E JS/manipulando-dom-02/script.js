
document.getElementById('titulo').innerText = 'Bem-vindo à Loja Online';


const produtoContainer = document.createElement('div');
produtoContainer.classList.add('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Produto A';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Descrição do Produto A. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 99,99';


produtoContainer.appendChild(nomeProduto);
produtoContainer.appendChild(descricaoProduto);
produtoContainer.appendChild(precoProduto);


document.body.appendChild(produtoContainer);
