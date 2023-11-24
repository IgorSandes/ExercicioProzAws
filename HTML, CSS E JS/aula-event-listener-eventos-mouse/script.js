let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

// variáves
let btnAddProduto01 = document.querySelector('#btn-adicionar-produto-01');
let qtdProdutos01 = document.querySelector('#quantidade-produto-01');
let btnDecProduto01 = document.querySelector('#btn-subtrair-produto-01');

// função
function add01() {
  qtdProdutos01.value = parseInt(qtdProdutos01.value) + 1;
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1;
  subtotalInfo.valor = (subtotalInfo.quantidade * 11.66).toFixed(2);
  atualizarSubtotal();
}
function dec01() {
  if (qtdProdutos01.value > 0) {
  qtdProdutos01.value = parseInt(qtdProdutos01.value) - 1;
  subtotalInfo.quantidade = subtotalInfo.quantidade - 1;
  subtotalInfo.valor = (subtotalInfo.quantidade * 11.66).toFixed(2);
  atualizarSubtotal();
  }
}
function atualizarSubtotal() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor;
}

// eventos

btnAddProduto01.addEventListener('click', add01);
btnDecProduto01.addEventListener('click', dec01);