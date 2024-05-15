// Função para adicionar um item à lista
function adicionarItem() {
    var itens = document.querySelectorAll('.item');
    var total = 0;

    var listaItens = document.getElementById("lista-itens");
    var totalElement = document.getElementById("total");

    listaItens.innerHTML = ''; // Limpa a lista antes de adicionar os itens novamente

    itens.forEach(function(item) {
        var quantidadeInput = item.querySelector('input[type="number"]');
        var quantidade = parseInt(quantidadeInput.value);
        var precoTexto = item.querySelector('.preco').textContent;
        var preco = parseFloat(precoTexto.substring(precoTexto.indexOf('R$') + 3)); // Extrai o preço do texto

        if (!isNaN(quantidade) && quantidade > 0) {
            var li = document.createElement("li");
            li.textContent = `${quantidade}x ${item.querySelector('h3').textContent}`;
            listaItens.appendChild(li);
            total += quantidade * preco;
        }
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}