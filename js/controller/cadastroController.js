// Controller da tela de cadastro: liga o formulário ao Model

let formulario = document.getElementById('form-reserva');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    let reserva = {
        placa: document.getElementById('placa').value,
        nome: document.getElementById('nome').value,
        apartamento: Number(document.getElementById('apartamento').value),
        bloco: document.getElementById('bloco').value,
        modelo: document.getElementById('modelo').value,
        cor: document.getElementById('cor').value,
        vaga: Number(document.getElementById('vaga').value)
    };

    console.log(reserva);
    
    salvarReserva(reserva);
    alert('Reserva cadastrada com sucesso!');
    formulario.reset();
});