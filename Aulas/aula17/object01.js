let a = {nome: 'A', 
    sexo: 'M', 
    peso: 76, 
    engordar(p = 0) {
    console.log('Engordou')
    this.peso += p
    }
}

a.engordar(3)
console.log(`${a.nome} pesa ${a.peso}Kg`)