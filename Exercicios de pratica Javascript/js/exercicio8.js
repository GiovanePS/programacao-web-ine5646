function obterRegiaoFiscalAtravesDoCPFInformado(cpfInformado) {
    cpfInformado /= 100
    let regiaoFiscal = undefined
    regiaoFiscal = cpfInformado%10
    console.log(cpfInformado)
    
    //----------------------------
    return regiaoFiscal
}



function tratadorDeCliqueExercicio8() {
    let textCPF = document.getElementById("textCPF")
	let textRegiao = document.getElementById("regiaoFiscal")

    const regiaoFiscal = obterRegiaoFiscalAtravesDoCPFInformado(textCPF.value);
    textRegiao.textContent = "Região fiscal: "+regiaoFiscal
}
