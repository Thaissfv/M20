//calcule o mdc de dois números

//sem recursão
const calcularMDC = (a, b) => {
    while (b !== 0) {
      const temp = a;
      a = b;
      b = temp % b;
    }
    return a;
  };
  
  //recursão
  const calcularMDCRecursivo = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return calcularMDCRecursivo(b, a % b);
    }
  };
  
  module.exports = {
    calcularMDC,
    calcularMDCRecursivo,
  };