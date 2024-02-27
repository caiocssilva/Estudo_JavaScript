// variáveis
let nome = "Caio";

console.log(nome);

nome = "Caio César";

console.log(nome);

const idade = 28;

console.log(idade);

// mais sobre variáveis

let a = 10,
  b = 20,
  c = 30;

console.log(a, b, c);

const nomecompleto = "Caio César";

const nomeCompleto = "Mara Silva";

console.log(nomecompleto);
console.log(nomeCompleto);

let _test = "ok";

let $test = "ok";

console.log(_test);

console.log($test);

// prompt
// const age = prompt("Digite sua idade:");

// console.log(`Você tem ${age} anos.`);

// alert
//alert("Testando");

//const z = 15;

//alert(`O número é ${z}`);

// Math
console.log(Math.max(5, 2, 1, 10)); // retorna o maior valor

console.log(Math.floor(5.14)); // arredonda para baixo

console.log(Math.ceil(5.14)); // arredonda para cima

console.log(Math.round(5.7)); // arredonda para o mais próximo

// Console
console.log("log!");

console.error("erro!");

console.warn("aviso!");

console.info("Isso é uma informação!");

const pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

console.table(pessoas);

// if
const m = 10;

if (m > 5) {
  console.log("M é maio que 5!");
}

const user = "Caio";

if (user === "Caio") {
  console.log("Olá Caio!");
}

if (user === "Mara") {
  console.log("Olá Mara!");
}

console.log(user == "Caio", user === "Mara");

// else
const loggedIn = false;

if (loggedIn) {
  console.log("Está autenticado!");
} else {
  console.log("Não etsá autenticado");
}

const q = 10;
const w = 25;

if (q > 5 && w > 20) {
  console.log("Números mais altos");
} else {
  console.log("Os números não são mais altos");
}

// else if
if (1 > 2) {
  console.log("Ele é maior");
} else if (2 > 3) {
  console.log("Ela é maior");
} else if (5 > 1);
{
  console.log("Agora sim!");
}

const userName = "Caio";
const userAge = 28;

if (userName === "José") {
  console.log("Bem vindo José!");
} else if (userName === "Caio" && userAge === 28) {
  console.log("Olá Caio, você tem 31 anos!!");
} else {
  console.log("Nenhuma condição aceita!");
}

// while

let p = 0;

while (p < 5) {
  console.log(`Repetindo ${p}`);
  p = p + 1;
}

// loop infinito
// let x = 10

// while (x > 5) {
// console.log(`Imprimindo ${x}`);
// }

// do while
let o = 10;

do {
  console.log(`Valor de o: ${o}`);
  o--; // decrementa em 1 a cada repeticao
} while (o > 1);

// for
for (let t = 0; t < 10; t++) {
  console.log("Repetindo algo..");
}

let r = 10;

for (r; r > 0; r = r - 1) {
  console.log(`O r está diminuindo: ${r}`);
}

// identação 
for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10" ${u}`);
  } else {
    if (u / 2 === 0) {
      console.log("deu 0");
    }
  }
}

// break
for (let g = 20; g > 10; g--) {
  console.log(`O valor de g é: ${g}`);

  if (g === 15) {
    console.log("O g é 15");
    break;
  }
}

// continue
for (let s = 1; s < 10; s = s + 1) {
  // operador resto = %
  if (s % 2 == 0) {
    console.log("Número par!");
    continue;
  }

  console.log(s);
}

// switch
const job = "Desenvolvedor"

switch (job) {
  case 'Programador':
    console.log("Você é um Advogado!");
    break;
  case "Desenvolvedor":
    console.log("Você é um Desenvolvedor!");
    break;
  default:
    console.log("Profissional não encontrado!");    
}

// switch "errado"
const e = 100;

switch (e) {
  case 200:
    console.log("E é 200!");
  case 100:
    console.log("E é 100!"); 
  case 10:
    console.log("E é 10!");
  default:
    console.log("E não foi encontrado")  
}