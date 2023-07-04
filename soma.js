//soma de todos os múltiplos de 5 ou 7 abaixo de 1000
const calcularSomaMultiplos = (x, y, limite) => {
    let somax = 0;
    let somay = 0;
  
    // múltiplos de x
    for (let i = x; i <= limite; i = i + x) {
      somax = somax + i;
    }
  
    // múltiplos de y
    for (let i = y; i <= limite; i = i + y) {
      somay = somay + i;
    }
  
    return somax + somay;
  };
  
  module.exports = {
    calcularSomaMultiplos,
  };