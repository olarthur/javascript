let num = document.getElementById('fnum')
let list = document.querySelector('selector#flista')
let r = document.getElementById('res')
let v = []

function isNumber(n) {

    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {

    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {

    if (isNumber(num.value) && !inList(num.value, v)) {
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}
