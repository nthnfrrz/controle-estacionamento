// Controller da tela de vagas disponíveis

let resumoVagas = document.getElementById('resumo-vagas');
let areaVagas = document.getElementById('lista-disponiveis');

function exibirVagasDisponiveis() {
    let vagasLivres = listarVagasDisponiveis();
    let total = obterTotalVagas();

    areaVagas.innerHTML = '';

    if (vagasLivres.length === 0) {
        resumoVagas.innerHTML = 'Todas as vagas estão ocupadas no momento.';
    } else {
        resumoVagas.innerHTML = `<strong>${vagasLivres.length}</strong> de ${total} vagas livres`;

        for (let i = 0; i < vagasLivres.length; i++) {
            let cartao = document.createElement('div');
            cartao.classList.add('cartao-vaga');
            cartao.innerHTML = `<span>Vaga</span> <strong>${vagasLivres[i]}</strong>`;
            areaVagas.appendChild(cartao);
        }
    }
}

exibirVagasDisponiveis();