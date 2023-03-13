//visitante 1
var nomev  = "visitante";
var senhav = "v123";

//aluno 2 
var nomea  = "guilherme";
var senhaa = "gui123"; 

//funcionario 3
var nomef  = "bezerra";
var senhaf = "beze123";

//professor 4
var nomep  = "josenyr";
var senhap = "jose123";


function voltar(){
    window.location.href = "../index.html";
}


function processo(){

let nome = document.getElementById("nome").value;
let senha = document.getElementById("senha").value;
var funcao = document.getElementById("select");
var opcaoTexto = funcao.options[funcao.selectedIndex].value;
 
    if (nome == nomev && senha == senhav){
        window.location.href = "processo/aprovado.html";

    }else if (nome.value == nomea && senha.value == senhaa){
        window.location.href = "processo/aprovado.html";

    }else if (nome.value == nomef && senha.value == senhaf){
        window.location.href = "processo/aprovado.html";

    }else if(nome.value == nomep && senha.value == senhap){
        window.location.href = "processo/aprovado.html";

    }else window.location.href = "processo/negado.html";

}


class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

class Professor extends Pessoa {
    constructor(nome, funcao){
        super(nome);
        this.funcao = funcao;
    }
}

class Funcionario extends Pessoa {
    constructor(nome, funcao){
        super(nome);
        this.funcao = funcao;
    }
}

class Aluno extends Pessoa {
    constructor(nome, funcao){
        super(nome);
        this.funcao = funcao;
    }
}

class Visitante extends Pessoa{
    constructor(nome, funcao){
        super(nome);
        this.funcao = funcao;
    }
}

class fatecFactory{
    criarPorFunc(funcao, nome){

        if(funcao == document.getElementById("4")){
            return new Professor(nome, funcao);
        } else if(funcao == document.getElementById("3")) {
            return new Funcionario(nome, funcao);
        } else if (funcao == document.getElementById("2")){
            return new Aluno(nome, funcao);
        } else if (funcao == document.getElementById("1")){
            return new Visitante(nome, funcao);
        }
    }
}

const portaria = new fatecFactory();

const botaoParaAcesso = document.getElementById('botao');
botaoParaAcesso.addEventListener('click', (event)=> {
    event.preventDefault();
    const nomeEntr = document.getElementById('nome').value;
    const funcaoEntr = document.getElementById('select').value;
    portaria.criarPorFunc(funcaoEntr, nomeEntr);
});




