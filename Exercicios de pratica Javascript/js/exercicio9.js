
function haOnzeDigitos(cpf) {
    //---- edite aqui para a validação do exercício 9a
    let strCPF = String(cpf).replace(/[^\d]/g, '')
    if (strCPF.length !== 11)
        return false
    else {
        return true
    }
}

function todosOsOnzeDigitosSaoNumeros(cpf) {
    //---- edite aqui para a validação do exercício 9b
    let strCPF = String(cpf).replace(/[^\d]/g, '')
      if ([
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    ].indexOf(strCPF) !== -1) {
        return false
    } else {
        return true
    }
    
}

function osOnzeNumerosSaoDiferentes(cpf) {
    //---- edite aqui para a validação do exercício 9c
    let strCPF = String(cpf).replace(/[^\d]/g, '')

    let numeros = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    ]

    numeros.forEach(element => {
        if (element == strCPF) {
            return false
        }
    });

    return true
}

function oPrimeiroDigitoVerificadorEhValido(cpf) {
    //---- edite aqui para a validação do exercício 9d
  let strCPF = String(cpf).replace(/[^\d]/g, '');

  if (strCPF.length !== 11) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(strCPF.charAt(i)) * (10 - i);
  }

  let resto = soma % 11;
  let digitoVerificador = resto < 2 ? 0 : 11 - resto;

  return digitoVerificador === parseInt(strCPF.charAt(9));
}

function oSegundoDigitoVerificadorEhValido(cpf) {
    //---- edite aqui para a validação do exercício 9e
  let strCPF = String(cpf).replace(/[^\d]/g, '');

  if (strCPF.length !== 11) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(strCPF.charAt(i)) * (11 - i);
  }

  let resto = soma % 11;
  let digitoVerificador = resto < 2 ? 0 : 11 - resto;

  return digitoVerificador === parseInt(strCPF.charAt(10));
}





//------------------- Não edite abaixo ----------------------------
function validarCPF(validacao, cpf) {
    switch (validacao) {
        case "onzeDigitos": return haOnzeDigitos(cpf)
        case "onzeSaoNumeros": return todosOsOnzeDigitosSaoNumeros(cpf) && validarCPF("onzeDigitos", cpf)
        case "naoSaoTodosIguais": return osOnzeNumerosSaoDiferentes(cpf) && validarCPF("onzeSaoNumeros", cpf)
        case "verificador10": return oPrimeiroDigitoVerificadorEhValido(cpf) && validarCPF("naoSaoTodosIguais", cpf)
        case "verificador11": return oSegundoDigitoVerificadorEhValido(cpf) && validarCPF("verificador10", cpf)

        default:
            console.error(validacao+" é um botão desconhecido...")
            return false
    }
}


function tratadorDeCliqueExercicio9(nomeDoBotao) {
    const cpf = document.getElementById("textCPF").value

    const validacao = (nomeDoBotao === "validade") ? "verificador11": nomeDoBotao
    const valido = validarCPF(validacao, cpf)
    const validoString = valido ? "valido": "inválido"
    const validadeMensagem = "O CPF informado ("+cpf+") é "+ validoString
    console.log(validadeMensagem)

    if (nomeDoBotao !== "validade") {
        let divResultado = document.getElementById(validacao);
        divResultado.textContent = validoString
        divResultado.setAttribute("class", valido ? "divValidadeValido": "divValidadeInvalido")    
    } else {
        window.alert(validadeMensagem)
    }

    
}