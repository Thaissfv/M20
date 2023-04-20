//indice do maior e menor valor

let numeros = [10, 45 , 27, 102 , 68, 52, -99]

var tamanho = numeros.length
var imaior = 0
var imenor = 0 
var vmaior = numeros[0]
var vmenor = numeros[0]

//calculando maior valor
for(var i=0; i < tamanho; i++){
    if (vmaior < numeros[i]){
        vmaior = numeros[i]
        imaior = i
    }
} 
console.log(`O maior valor ${vmaior} está no indice ${imaior + 1}`)

//calculando menor valor
for(var i=0; i < tamanho; i++){
    if (vmenor > numeros[i]){
        vmenor = numeros[i]
        imenor = i
    }
} 
console.log(`O menor valor ${vmenor} está no indice ${imenor + 1}`)