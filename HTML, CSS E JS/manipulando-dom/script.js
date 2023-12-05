
const tituloElemento = document.getElementById('titulo');
const listaNaoOrdenadaElemento = document.querySelector('ul');
const linkElemento = document.getElementById('link');
const listaOrdenadaElemento = document.getElementById('lista-ordenada');


tituloElemento.innerText = 'Título da Página';
linkElemento.innerText = 'Visite o site da Proz Educação';
linkElemento.href = 'https://prozeducacao.com.br';


listaNaoOrdenadaElemento.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';


listaOrdenadaElemento.innerHTML = '<li><a href="https://site1.com">Link 1</a></li>' +
                                   '<li><a href="https://site2.com">Link 2</a></li>' +
                                   '<li><a href="https://site3.com">Link 3</a></li>';
