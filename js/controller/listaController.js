// Controller da tela de listagem: mostra as reservas na tabela

let corpoTabela = document.getElementById('lista-reservas');

function exibirReservas() {
    corpoTabela.innerHTML = '';

    let lista = listarReservas();

    for (let i = 0; i < lista.length; i++) {
        let reserva = lista[i];
        let linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${reserva.vaga}</td>
            <td>${reserva.placa}</td>
            <td>${reserva.modelo}</td>
            <td>${reserva.cor}</td>
            <td>${reserva.nome}</td>
            <td>${reserva.apartamento}</td>
            <td>${reserva.bloco}</td>
            <td></td>
        `;

        corpoTabela.appendChild(linha);
    }
}

exibirReservas();