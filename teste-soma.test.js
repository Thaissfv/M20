// Importando a função que calcula a soma dos múltiplos
const { calcularSomaMultiplos } = require('./soma');

describe('Teste de Unidade - Soma dos Múltiplos', () => {
  it('Deve calcular a soma dos múltiplos corretamente', () => {
    const x = 5;
    const y = 7;
    const limite = 1000;

    const resultado = calcularSomaMultiplos(x, y, limite);

    expect(resultado).toBe(211995);
  });
});
