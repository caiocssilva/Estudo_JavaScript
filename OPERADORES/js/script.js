// Number
console.log(typeof 5);
console.log(typeof 55.5);
console.log(typeof -55);

// Operações Aritméticas
console.log(5 + 5);
console.log(55 - 5);
console.log( 5 * 3);
console.log(9 / 3);
console.log(5 + (5*5));

// Special numbers
console.log(typeof Infinity)

console.log(typeof -Infinity)

console.log(5 * "cccm")

console.log(typeof NaN)

// Strings 
console.log("Aspas Duplas");
console.log('Aspas simples');
console.log(`Crase`)

// Símbolos especiais em string
console.log(`Olá \nNovo Linha`);

console.log("Espaçamento \t de tab")

// Concatenação
console.log("Oi, " + "tudo" + " Bem?");

console.log(`Testando ` + `com ` + `crase"`);

// Templates Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// Boolean
console.log(true);

console.log(5 > 55);

console.log(55 < 100);

console.log(typeof false)

// Comparações 
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10)

console.log(10 === 10)

console.log(10 != 9)

// Indêntico 
console.log(9 == "9");  

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// Operadores lógicos 
console.log(true && true); 

console.log(true && false);

console.log(5 > 2 && 2 < 10); 

console.log(5 > 2 && "Caio" === 1); 

console.log(5 > 2 || "Caio" === 1);

console.log(5 < 2 || 5 > 55);

console.log(!true);

console.log(!5 > 2);

// Empty Values
console.log(typeof null, typeof undefined);     // object, undefined

console.log(null === undefined);                // Retorna False pois os tipos são diferentes

console.log(null == undefined);                 // ausência de valor, por isso são true

console.log(null == false);                     // ausência de valor não é um boolean false

console.log(undefined == false);                // ausência de valor não é um boolean false

// mudança de tipos

console.log(5 * null)

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);


