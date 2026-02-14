function adicionar(){
    //Obter valores do produto (nome, preço, quantidade);
    let produtoSelecionado = document.getElementById('produto').value;
    let nomeProduto = produtoSelecionado.split(' - ')[0];
    let precoProduto = produtoSelecionado.split('R$')[1];
    let quantidadeSelecionada = document.getElementById('quantidade').value;

    //Adicionar item no carrinho e calcular subtotal
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidadeSelecionada}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto*quantidadeSelecionada}</span></section>`;

    //Calcular valor total dos itens adicionados e exibir
    let selecionarTotal = document.getElementById('valor-total');
    valorTotal += parseFloat(precoProduto) * quantidadeSelecionada;
    selecionarTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${valorTotal}</span>`;

    //Limpar valor do campo quantidade ao clicar em adicionar
    let quantidadeSelecionadaTexto = document.getElementById('quantidade');
    quantidadeSelecionadaTexto.value = '';
}

function limpar(){
    //Selecionar campos de quantidade, valor total e o carrinho de compras para "zerar"
    let quantidadeSelecionadaTexto = document.getElementById('quantidade');
    let selecionarTotal = document.getElementById('valor-total');
    let carrinho = document.getElementById('lista-produtos');

    quantidadeSelecionadaTexto.value = '';
    valorTotal = 0;
    selecionarTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${valorTotal}</span>`;
    carrinho.innerHTML = ' ';
}

let valorTotal = 0;