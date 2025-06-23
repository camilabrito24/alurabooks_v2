let livros = [];
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const elementoPai = document.getElementById('livros');
getBuscarLivrosApi();

async function getBuscarLivrosApi(){
    const res = await fetch(endpointApi);
    livros = await res.json();
    console.table(livros);

    exibirLivrosNaTela(livros);
}

function exibirLivrosNaTela(listaDeLivros){
    listaDeLivros.forEach(livro =>{
        elementoPai.innerHTML += `
        <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `;
    })
}