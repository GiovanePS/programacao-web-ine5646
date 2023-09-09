function tratadorDeCliqueExercicio6() {
    var stringRecebida = window.prompt()

    var stringOutput = ''
    for (let i = 0; i < stringRecebida.length; i++) {
        stringOutput += stringRecebida[stringRecebida.length-1-i]
    }

    console.log(stringOutput)
}