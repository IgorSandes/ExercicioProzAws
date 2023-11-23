const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!" // alt + z quebra as linhas
  },
]

// Criar o elemento
const artigo = document.createElement('article') // O elemento entre as crase é uma tag

// Popular o elemento  e a crase serve para colocar variáveis dentro "interpolação"
artigo.innerHTML = 
`
<h3>${arrayPostagens[1].titulo}</h3>
<p class="subtitulo">${arrayPostagens[1].subtitulo}</p>
<div class="data">${arrayPostagens[1].data}</div>
<p>${arrayPostagens[1].texto}</p>
`
// Adicionar no dom

const main = document.querySelector('main');
main.appendChild(artigo);

console.log(arrayPostagens[0].titulo)

for(let i = 0; i < arrayPostagens.length; i++){
  const titulo = arrayPostagens[i].titulo;
  console.log(titulo);
}

// looping para adicionar n o dom

for(let i = 0; i < arrayPostagens.length; i++){
  const artigo = document.createElement('article');
 artigo.innerHTML =
`
<h3>${arrayPostagens[i].titulo}</h3>
<p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
<div class="data">${arrayPostagens[i].data}</div>
<p>${arrayPostagens[i].texto}</p>
`
const main = document.querySelector('main');
main.appendChild(artigo);
}
