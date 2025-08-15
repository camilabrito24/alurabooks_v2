let livros = [];
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosApi();

async function getBuscarLivrosApi(){
    const res = await fetch(endpointApi);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivrosNaTela(livrosComDesconto);
}

