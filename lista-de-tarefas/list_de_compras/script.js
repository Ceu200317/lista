const listaCompras = [];

    function exibirLista() {
        const ul = document.getElementById('listaExibida');
        ul.innerHTML = '';

        for (const [index, item] of listaCompras.entries()) {
            const li = document.createElement('li');
            li.textContent = `${index} - ${item}`;
            ul.appendChild(li);
        }
    }

    function adicionarItem() {
        const input = document.getElementById('itemInput');
        const item = input.value.trim();
        if (item === '') {
            alert('Digite um item!');
            return;
        }
        listaCompras.push(item);
        input.value = '';
        exibirLista();
    }

    function removerItem() {
        const indice = prompt('Digite o índice do item a ser removido:');
        if (indice === null) return;
        const i = parseInt(indice);
        if (isNaN(i) || i < 0 || i >= listaCompras.length) {
            alert('Índice inválido!');
            return;
        }
        listaCompras.splice(i, 1);
        exibirLista();
    }

    function atualizarItem() {
        const indice = prompt('Digite o índice do item a ser atualizado:');
        if (indice === null) return;
        const i = parseInt(indice);
        if (isNaN(i) || i < 0 || i >= listaCompras.length) {
            alert('Índice inválido!');
            return;
        }
        const novoValor = prompt('Digite o novo valor para o item:');
        if (novoValor === null || novoValor.trim() === '') return;
        listaCompras[i] = novoValor.trim();
        exibirLista();
    }

    function limparLista() {
        listaCompras.length = 0;
        exibirLista();
    }