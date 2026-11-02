# Residencial Bossa Nova: Controle de Estacionamento

Sistema web para controlar as vagas de estacionamento de um condomínio fictício, o Residencial Bossa Nova. Foi desenvolvido como o Desafio 1 da disciplina de Desenvolvimento Web, usando apenas HTML, CSS e JavaScript.

## Telas

- **Vagas cadastradas:** mostra em uma tabela todas as reservas feitas, com placa, modelo, cor, proprietário, apartamento e bloco. Cada reserva tem um botão para removê-la.
- **Nova reserva:** formulário para cadastrar a reserva de uma vaga. Ao salvar, os dados aparecem no console do navegador e uma mensagem confirma o cadastro.
- **Vagas disponíveis:** mostra quantas vagas estão livres e quais são elas. A lista é atualizada conforme as reservas são cadastradas ou removidas.

## Tecnologias

- HTML, CSS e JavaScript, sem nenhum framework
- localStorage do navegador, para manter as reservas salvas entre as telas

## Estrutura do projeto

O projeto foi organizado seguindo o padrão **MVC** (Model, View, Controller):

```
controle-estacionamento/
├── index.html              → View: vagas cadastradas
├── cadastro.html           → View: nova reserva
├── disponiveis.html        → View: vagas disponíveis
├── css/
│   └── style.css           → View: estilos de todas as telas
└── js/
    ├── model/
    │   └── reservaModel.js → Model: dados e métodos salvar, listar e remover
    └── controller/
        ├── cadastroController.js
        ├── listaController.js
        └── disponiveisController.js
```

- **Model:** cuida dos dados. Guarda as reservas e tem as funções de salvar, listar, remover e calcular as vagas livres.
- **View:** é o que o usuário vê. São as páginas HTML e o arquivo de estilos.
- **Controller:** faz a ligação entre a tela e os dados. Recebe as ações do usuário, chama o Model e atualiza a página.

## Como executar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` no navegador.

Também é possível abrir pelo VS Code com a extensão Live Server.

## Observações

- O projeto não tem back-end. As reservas ficam salvas no localStorage do navegador.
- Na primeira vez que o sistema é aberto, ele começa com algumas reservas fictícias.
- O condomínio tem 20 vagas no total.
- Os dados ficam salvos apenas no navegador e no endereço em que o sistema foi aberto.

## Autor

Nathan Ferraz | Análise e Desenvolvimento de Sistemas, SENAI