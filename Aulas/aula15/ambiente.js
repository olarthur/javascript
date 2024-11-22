let num = [5, 3, 6]

num.push(1) // Inserir valor no vetor
num.sort() // Ordenar o vetor

console.log(`O vetor tem ${num.length} posições.`) 
console.log(`O primeiro valor do vetor é ${num[0]}`)

let p = num.indexOf(3) //Buscar valor no vetor

if (p == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 3 está na posição ${p}`)
}

 