// Model: guarda as reservas e as operações sobre elas

let reservas = [
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

function salvarReserva(reserva) {
    reservas.push(reserva);
}

function listarReservas() {
    return reservas;
}