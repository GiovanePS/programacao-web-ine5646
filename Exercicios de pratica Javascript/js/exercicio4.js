function tratadorDeCliqueExercicio4() {
    let numero1 = Number(window.prompt())
    verificarNumeroNoIntervalo(numero1)
    let numero2 = Number(window.prompt())
    verificarNumeroNoIntervalo(numero2)
}

function verificarNumeroNoIntervalo(numero) {
    let primeiroIntevalo = true
    if (numero >= 30 && numero <= 50 || numero >= 60 && numero <= 100) {
        if (numero > 50) { primeiroIntevalo = false }
            window.alert(`${numero} está no intervalo ${primeiroIntevalo ? "[30, 50]" : "[60, 100]"}.`)
    } else {
        window.alert(`O número informado não está em nenhum dos dois intervalos.`)
    }
}