function adicionar(){
    let produtoSelecionado = document.getElementById('produto').value;
    let nomeProduto = produtoSelecionado.split(' - ')[0];
    let precoProduto = produtoSelecionado.split('R$')[1];
    let quantidadeSelecionada = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos');
    let listaProdutos = carrinho.querySelector('.carrinho__produtos__produto');
    let selecionarTotal = document.getElementById('valor-total');
    let quantidadeSelecionadaTexto = document.getElementById('quantidade');
        
    quantidadeSelecionadaTexto.value = '';


    listaProdutos.innerHTML += `<br><span class="texto-azul">${quantidadeSelecionada}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</span></br>`;
    
    valorTotal += parseFloat(precoProduto) * quantidadeSelecionada;

    selecionarTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${valorTotal}</span>`;

}

function limpar(){
    let quantidadeSelecionadaTexto = document.getElementById('quantidade');
    let selecionarTotal = document.getElementById('valor-total');
    let carrinho = document.getElementById('lista-produtos');
    let listaProdutos = carrinho.querySelector('.carrinho__produtos__produto')

    quantidadeSelecionadaTexto.value = '';
    valorTotal = 0;
    selecionarTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${valorTotal}</span>`;
    listaProdutos.innerHTML = ' ';

}


let valorTotal = 0;
