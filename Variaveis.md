Hoisting - Hoisting uma maneira de pensar sobre como os contextos de execução funcionam em javaScript, que salva em 
memoria as variaveis na fase de compilação, assim podendo busca uma variavel sem antes declara
example:
bla = 2
var bla;
// ...
// é implicitamente entendido como:
var bla;
bla = 2;



Var - O escopo depende onde a variavel foi declarada podendo ser global ou da função
    - Atribuir um valor a uma variavel não declarada a coloca num escopo global
    - Define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco
    - se tornam propriedade do objeto window

Let - são "hoisting" para começo do bloco em que elas são definidas
    - variaveis de bloco
    - Uma expressão let limita o escopo de uma variável declarada somente para aquela expressão.
    - Opcionalmente inicia com um valor
    - let limita os escopo das variáveis para aquele bloco

Const - Variavel de valor fixo
      - somente leitura
      - valor mutavel mas inalteravel
      - não pode ser alterada ou retribuída.
      - pode ser declarada no escopo global, mas não é atribuida ao objeto window
      - obrigatoriamente inicia com um valor

Temporal dead zone?