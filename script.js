numero = ['_', '_']

voto1 = ['4', '5']
voto2 = ['2', '3']
voto3 = ['1', '5']

candidato1 = 0
candidato2 = 0
candidato3 = 0

function exibir() {
    if (numero.toString() == voto1.toString()) {
        document.getElementById('candidato').innerText = 'candidato1'
    } else if (numero.toString() == voto2.toString()) {
        document.getElementById('candidato').innerText = 'candidato2'
    } else if (numero.toString() == voto3.toString()) {
        document.getElementById('candidato').innerText = 'candidato3'
    }
    else {
        document.getElementById('candidato').innerText = ''
    }
}


function registrar_num(num_voto) {
    if (numero[0] == '_') {
    numero.shift()
    numero.unshift(num_voto)
    document.getElementById('num').innerText = numero.join(' ')
    } else {
        numero.pop()
        numero.push(num_voto)
        document.getElementById('num').innerText = numero.join(' ')
    }
    exibir()
}

function limpar() {
    numero = ['_', '_']
    document.getElementById('num').innerText = numero.join(' ')
    document.getElementById('candidato').innerText = ' '
}


function confirmar() {
    if (numero.toString() == voto1.toString()) {
        candidato1 += 1
    } else if (numero.toString() == voto2.toString()) {
        candidato2 += 1
    } else if (numero.toString() == voto3.toString()) {
        candidato3 += 1
    }
    numero = ['_', '_']
    document.getElementById('candidato').innerText = ' '
    document.getElementById('num').innerText = numero.join(' ')
}

function finalizar() {
    alert('Candidato1: ' + candidato1 + '\n' + 'Candidato2: ' + candidato2 + '\n' + 'Candidato3: ' + candidato3)
    numero = ['_', '_']
    document.getElementById('num').innerText = numero.join(' ')
    candidato1 = 0
    candidato2 = 0
    candidato3 = 0

}