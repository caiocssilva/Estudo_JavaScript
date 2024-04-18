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