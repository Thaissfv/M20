//soma de todos os múltiplos de 5 ou 7 abaixo de 1000
var x = 5
var y = 7
var somax = 0
var somay = 0

//mutiplos de x
for (var i=x; i<=1000;i=i+x){
    somax = somax + i
}
console.log(`A soma dos multiplos de ${x} é ${somax}`)

//multiplos de y
for (var i=y; i<=1000;i=i+y){
    somay = somay + i
}
console.log(`A soma dos multiplos de ${y} é ${somay}`)
