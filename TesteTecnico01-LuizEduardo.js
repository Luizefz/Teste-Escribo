function somaDivisiveis(Numero) {

    var soma = 0

    for (let i = 0; i < Numero; i++) {

        if ((i % 3) == 0 || (i % 5) == 0) { //Verifica o resto da divisão de cada número antecessor ao digitado.

            soma += i   //Caso o número não possuir resto, soma o valor na variável soma.

        }
    }

    console.log(soma)

}