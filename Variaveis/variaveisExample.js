var a
//varivel declarada no escopo global
function name(params) {
 var y
 //variavel declarada no escopo da func 
}

function hoistingvar(){
console.log('antes de declarar', x)
var x = 1
//não dara erro pois a memoria ja foi alocada para essa variavel, mas trara o valor undefined pois não foi denifido ainda
console.log('depois de declarar', x)
//agora que foi definida ela nos retornara o valor
}

function hoistingFunc() {
  console.log(sum())
  //apresentara o valor normalmente pois o hoisting declarara a func primeiro
  function sum() {
    const a = 1
    return a
  }
  console.log(sum())
}

function examplefunc() {
  const T = 1
  //definimos o const com valor 1  
  T = 4
  //retornara um type error pois a variavel foi definida como constante e não podemos alterala (Uncaught TypeError: Assignment to constant variable.)
  const T = 6 
  // retornara erro pois a variavel ja foi definida (Uncaught SyntaxError: Identifier 'a' has already been declared)
  if(true){
    //não retornara erro pois let declara a variavel no escopo do bloco
    let T = "test"
  }
  //acabando o bloco T voltar ao valor da const
  const B
  //retornara erro pois variaveis declararadas como const devem ser inicializada
  const Obje = {test: 'a'}
  Obje = {test: 'b'}
  //trara erro pois não se pode sobreescrever variaveis const
  Obje.test = "mudei"
  //funcionara pois os objetos são mutaveis
}

function dataTypes() {
  var a = 1 //tipo de dados = number
  var b = 'test' // tipo de dados = string
  var c = undefined //tipo de daos = undefined(valor não definido)
  var d = null //tipo de dados = null(sem valor)
  var e = true 
  var f = false
  //booleano
  //dados primitivos

  var x = {} //objeto tem propriedades e metodos
  var pessoa = {nome: "lucas", altura: 1.75, peso: 85} //objeto com propriedade
  pessoa.nome = "felipe" //propriedades mutavel

  var numeros = [] // array vazio
  numeros = [1,2,3,4,5,6] //para definir valores
  //array é acessado por indices
  numeros[0]//me tras o primeiro indice do array
  //me retornara 1
  // arrays nada mais são do que objetos
  //seu eu passar o nome do indice do objeto ele retornara o valor
  pessoa[nome]

}

