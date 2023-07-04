// Importando as funções de cálculo do MDC
const { calcularMDC, calcularMDCRecursivo } = require('./mdc');

// Casos de teste
describe('Teste de Unidade - Cálculo do MDC', () => {
  it('Deve calcular o MDC corretamente (sem recursão)', () => {
    const a = 20;
    const b = 10;

    // Chamando a função de cálculo do MDC sem recursão
    const resultado = calcularMDC(a, b);
    expect(resultado).toBe(10);
  });

  it('Deve calcular o MDC corretamente (com recursão)', () => {
    const a = 55;
    const b = 5;

    // Chamando a função de cálculo do MDC com recursão
    const resultado = calcularMDCRecursivo(a, b);
    expect(resultado).toBe(5);
  });
});
