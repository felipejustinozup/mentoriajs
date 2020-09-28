let myObj = {}; // literal
let myObj2 = new Object(); // non-literal
let myStr = "string literal";
let myStr2 = 'string literal'; 
let nonLiteralstr = new String();

//Interpolation
let myVar = 'es6';
console.log(`Welcome ${myVar}!`);
// > Welcome es6!
let value = 5.123124, name = 'Vincent';
console.log(`${name.toUpperCase()}, you owe me U$${value.toFixed(2)}!`);
// > VINCENT, you owe me U$5.12!

//MultiLines
console.log(`texto string linha 1
texto string linha 2`);
// "texto string linha 1
//  texto string linha 2"

//tagged Literals
var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world"
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return `tenho ${values[0]} anos, e sei falar ${strings[0]}`;
}

tag`Hello ${ a + b } world ${ a * b}`;
//tenho 15 anso e sei falar Hello