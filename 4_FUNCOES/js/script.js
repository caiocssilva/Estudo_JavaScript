// 1 - criando uma função

function minhaFuncao() {
    console.log('Testando')
}

minhaFuncao()

const minhaFuncaoEmVarialvel = function () {
    console.log('Função em variável!')
}

minhaFuncaoEmVarialvel()

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro('Imprimindo alguma coisa!')

function checkNumber(num) {
    if ( num % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
}
}

console.log(checkNumber(7))

// 2 - return

const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma (a, b)

console.log(resultado)

console.log(soma(c, d))

// 3 - escopo função

let  x = 5

function testandoEscopo() {
    let x = 55
    console.log(`X dentro da função é: ${x}`)
}

testandoEscopo()

console.log(`X fora da função é: ${x}`)

// 4 - escopo aninhado

let m = 10

function escopoAninhado() {
    let m = 20

    if(true){
        let m = 30

        if(true){
            let m = 40

            console.log(m)
        }    

        console.log(m)
    }

    console.log(m)
}

escopoAninhado(m)

console.log(m)

// 5 - arrow function

const testeArrow = () => {
    console.log('Esta é uma arrow function')
}

testeArrow()

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log('Par')
        return
    }

    console.log('Impar')
}    

parOuImpar(5)

parOuImpar(10)