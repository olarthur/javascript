let num = document.getElementById('fnum')
let list = document.querySelector('select#flista')
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
        v.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        r.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''
    num.focus()
}

function finalizar() {

    if (v.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {

        let tot = v.length
        let maior = v[0]
        let menor = v[0]
        let soma = 0
        let media = 0

        for (let p in v) {
            soma += v[p]
            
            if (v[p] > maior) {
                maior = v[p]
            }
            if (v[p] < menor) {
                menor = v[p]
            }
        }

        media = soma / tot

        r.innerHTML = ''
        r.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        r.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        r.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        r.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        r.innerHTML += `<p>A média de todos os valores é ${media}</p>`
    }
}
