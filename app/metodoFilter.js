const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener("click", filtrarLivros))

function filtrarLivros(){
    const elementoBtn =  document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = (categoria == 'disponiveis') ? filtroDiponibilidade() : filtroCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados);

    if(categoria == 'disponiveis') {
        const valorTotal = calcularValorTotal(livrosFiltrados);
        exibirValTotal(valorTotal);
    }
}

function filtroCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}
function filtroDiponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValTotal(valorTotal) {
    elementoValTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `;
}