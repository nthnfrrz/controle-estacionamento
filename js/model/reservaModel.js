// Model: guarda as reservas e as operações sobre elas

const TOTAL_VAGAS = 20;

const reservasIniciais = [
    {
        placa: 'BRA2E19',
        nome: 'Nathan Ferraz',
        apartamento: 101,
        bloco: 'A',
        modelo: 'HB20',
        cor: 'Branco',
        vaga: 3
    },
    {
        placa: 'QWE4R56',
        nome: 'João Vitor Duarte',
        apartamento: 204,
        bloco: 'B',
        modelo: 'Kwid',
        cor: 'Vermelho',
        vaga: 7
    }
];

function carregarReservas() {
    let dadosSalvos = localStorage.getItem('reservas');

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return reservasIniciais;
}

function gravarReservas() {
    localStorage.setItem('reservas', JSON.stringify(reservas));
}

let reservas = carregarReservas();

function salvarReserva(reserva) {
    reservas.push(reserva);
    gravarReservas();
}

function listarReservas() {
    return reservas;
}

function removerReserva(posicao) {
    reservas.splice(posicao, 1);
    gravarReservas();
}

function obterTotalVagas() {
    return TOTAL_VAGAS;
}

function listarVagasDisponiveis() {
    let disponiveis = [];

    for (let numero = 1; numero <= TOTAL_VAGAS; numero++) {
        let ocupada = false;

        for (let i = 0; i < reservas.length; i++) {
            if (reservas[i].vaga === numero) {
                ocupada = true;
            }
        }

        if (!ocupada) {
            disponiveis.push(numero);
        }
    }

    return disponiveis;
}