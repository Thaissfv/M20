//indice do maior e menor valor
const calcularMaiorMenor = (numeros) => {
    let tamanho = numeros.length;
    let imaior = 0;
    let imenor = 0;
    let vmaior = numeros[0];
    let vmenor = numeros[0];
  
    //calculando maior valor
    for (let i = 0; i < tamanho; i++) {
      if (vmaior < numeros[i]) {
        vmaior = numeros[i];
        imaior = i;
      }
    }
  
    //calculando menor valor
    for (let i = 0; i < tamanho; i++) {
      if (vmenor > numeros[i]) {
        vmenor = numeros[i];
        imenor = i;
      }
    }
  
    return {
      maior: vmaior,
      indiceMaior: imaior + 1,
      menor: vmenor,
      indiceMenor: imenor + 1,
    };
  };
  
  module.exports = {
    calcularMaiorMenor,
  };