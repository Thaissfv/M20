//calcule o mdc de dois números

//sem recursão
var a = 20
var b = 10
while (b!=0){
    a=b
    b=a%b
}
console.log(a)

//recursão
function mdc (a, b){
    if (b==0){
        return a
    }else {
       return mdc(b, a%b)
    }
}
console.log(mdc(55,5))