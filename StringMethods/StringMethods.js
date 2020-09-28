//trim()
let b = '   foo  ';
console.log(b.trim()); // 'foo'

let a = 'foo    ';
console.log(a.trim()); // 'foo'

//concat()
let boa = 'boa';
console.log(boa.concat('tarde', ' Lucas meu amigo'));

//indexOf()
'hello world'.indexOf('') // retorna 0
'hello world'.indexOf('hell') // retorna 0 por ser o index onde o argumento é inciado
'hello world'.indexOf('wor') // retorna 6
'hello world'.indexOf('hell', 5) // retorna -1 por não existir esse valor do index que iniciou a busca

//includes()
'Bandeira do Brasil'.includes('brasil'); // returns false
