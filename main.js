const form = document.getElementById('form-agenda');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emoji aprovado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('numero-contato');
    const inputEmailContato = document.getElementById('email-contato');

    if (atividades.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        atividades.push(inputNomeContato.value);
        notas.push(parseFloat(inputTelContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += `<td>${inputEmailContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelContato.value = '';
    inputEmailContato.value = '';
}

function atualizaTabela() { 
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function atualizaFinal () {
    const finalForm = atualizaFinal();

    document.getElementById('contatos-cadastrados').innerHTML = imgAprovado ;
}
