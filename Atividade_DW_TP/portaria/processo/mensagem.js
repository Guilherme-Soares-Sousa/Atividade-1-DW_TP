const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get('nome');
const funcao = urlParams.get('func');

const mensagem = `Parabéns, ${nome}! Você está logado.`
const mensagemElement = document.getElementById("mensagemNome");
mensagemElement.textContent = mensagem;

const msgRela = `Sua relação com a FATEC é de: ${funcao}.`
const msgEleRela = document.getElementById("relacaoFunc");
msgEleRela.textContent = msgRela;