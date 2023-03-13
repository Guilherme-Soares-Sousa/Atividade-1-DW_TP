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


function processo(){

let nome = document.getElementById("nome").value;
let senha = document.getElementById("senha").value;
var funcao = document.getElementById("select");
var opcaoTexto = funcao.options[funcao.selectedIndex];




const botaoParaAcesso = document.getElementById("botao");
botaoParaAcesso.addEventListener('click', (event)=> {
    event.preventDefault();
    portaria.criarPorFunc(nome, opcaoTexto);
    
});


class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

class Professor extends Pessoa {
    constructor(nome){
        super(nome);
        this.tipo = 'Professor';

    }
}

class Funcionario extends Pessoa {
    constructor(nome){
        super(nome);
        this.tipo = 'Funcionário';
        
    }
}

class Aluno extends Pessoa {
    constructor(nome){
        super(nome);
        this.tipo = 'Aluno';
        
    }
}

class Visitante extends Pessoa{
    constructor(nome){
        super(nome);
        this.tipo = 'Visitante';
        
    }
}

class fatecFactory{
    criarPorFunc(tipo, nome){

        switch (tipo) {
            case 'Professor':
              return new Professor(nome);
            case 'Funcionario':
              return new Funcionario(nome);
            case 'Aluno':
              return new Aluno(nome);
            case 'Visitante':
                return new Visitante(nome);
            default:
              throw new Error('Tipo de pessoa inválido');
          }
    }
}


const portaria = new fatecFactory();


switch(opcaoTexto.value)
{

    case "1":
        const visitante = portaria.criarPorFunc('Visitante', nome);
        if (nome == nomev && senha == senhav && opcaoTexto.value == "1"){
            window.location.href = "processo/aprovado.html?nome="+ visitante.nome +"&func="+ visitante.tipo;
        }else{
            window.location.href = "processo/negado.html";
        }
        break;

    case "2":
        const aluno = portaria.criarPorFunc('Aluno', nome);
        if (nome == nomea && senha == senhaa && opcaoTexto.value == "2" ){
            window.location.href = "processo/aprovado.html?nome="+ aluno.nome +"&func="+ aluno.tipo;
        } else{
            window.location.href = "processo/negado.html"
        }
        break;

    case "3":
        const funcionario = portaria.criarPorFunc('Funcionario', nome);
        if (nome == nomef && senha == senhaf && opcaoTexto.value == "3" ){
            window.location.href = "processo/aprovado.html?nome="+ funcionario.nome +"&func="+ funcionario.tipo;
        } else{
            window.location.href = "processo/negado.html"
        }
        break;

    case "4":
        const professor = portaria.criarPorFunc('Professor', nome);
        if (nome == nomep && senha == senhap && opcaoTexto.value == "4" ){
            window.location.href = "processo/aprovado.html?nome="+ professor.nome +"&func="+ professor.tipo;
        } else{
            window.location.href = "processo/negado.html"
        }
        break;

}


}



