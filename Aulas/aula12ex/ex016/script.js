function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fAno.value)
       var genero = ''
       var img = document.createElement('img') 

       img.setAttribute('id', 'foto') 

       if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bb.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jv.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }

       } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bbf.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jvf.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultof.png')
            } else {
                img.setAttribute('src', 'idosof.png')
            }
       }

       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }   
}