// Model: guarda as reservas e as operações sobre elas

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