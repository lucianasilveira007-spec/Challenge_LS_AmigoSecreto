
let titulo = document.getElementById('h1')
titulo.innerHTML = 'Bem-vindo ao amigo oculto online!'

let amigos = [];
    
//Capturar o valor do campo de entrada
//Se estiver vazio, exiba um alerta com a mensagem de erro:
function adicionarAmigo() {
    let inputAmigo = document.getElementById('#amigo').value;
    if (inputAmigo === '') {
        alert('Por favor, insira um nome.');
    } else {
        // Capturar o valor do campo de entrada
        amigos.push(inputAmigo);

        // atualiza lista
        atualizarLista();

        // limpa o campo de entrada
        limparCampo();
    }
}
//Validar a entrada
function limparCampo() {
    let inputAmigo = document.getElementById('amigos');
    let nomeAmigo = inputAmigo.value.trim();
}
//Atualizar o array de amigos:
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // limpa o campo de entrada

    // adiciona os nomes na lista
    amigos.forEach((nome) => {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Nenhum nome foi adicionado à lista.');
        return;
    }

    // sorteia um dos nomes da lista
    let sorteador = Math.floor(Math.random() * amigos.length);

    // pega um nome da lista
    let amigoSorteado = amigos[sorteador];

    // Mostra o resultado do sorteio "amigoOculto"
    let amigoOculto = document.getElementById('#amigoOculto');
    amigoOculto.innerHTML = `<li>O Amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}

