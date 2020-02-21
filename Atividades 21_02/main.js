

//########################### ATIVIDADE 01  ############################

//a)

const usuario = [{nome: 'pedro', idade: 18, escola: 'ifpi'},
                 {nome: 'ana', idade: 22, escola: 'ifpi'},
                 {nome: 'lia', idade: 15, escola: 'ibc'},]
                 

const idades = usuario.map(data);

function data(num){
    return num.idade;
}

console.log(idades);


//b)

const alunos = usuario.filter(item);

function item(dados){
    if(dados.escola == "ifpi"){
        return dados.nome;
    }
    
}

console.log(alunos);


//########################### ATIVIDADE 02  ############################

//a)


const pessoa = usuario.find(function(dados){
    if (dados.escola == "ibc"){
        return dados.nome;
    }
    
});

console.log(pessoa);

//b)

const mult = usuario.map(function(item){
    return item.idade * 2;
});

const quarenta = mult.filter(function(item){
    
        return item <= 40;
        
}); 

console.log(mult);
console.log(quarenta);



//########################### ATIVIDADE 03 ############################


const numeros = [1, 2, 3, 4, 5];

const test = numeros.map(item =>item + 10);

console.log(test);

//####################################################################




//const resut = 

console.log((nome = 'ana', idade = 18)=>(nome, idade));

const aluno = {nome: 'Carlos', 
    endereco:{
        cidade: 'Corrente',
        uf:'PI',
    }
}


//3-a)
var {nome,  endereco} = aluno;
var {cidade, uf:estado} = endereco;
console.log("3-A nome: "+nome);
console.log("3-A cidade: "+cidade);
console.log("3-A estado: "+estado);



//####################################################################


const pessoa = 'Pedro';
const idade = 18;

console.log(`O usuario ${pessoa} possui ${idade} anos`);


const nome = 'IFPI';
const idade = 10;
const usuario = {nome,idade, cidade:'corrente'}
console.log(usuario)