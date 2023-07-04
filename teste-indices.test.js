// Importando a função que calcula o maior e o menor valor
const { calcularMaiorMenor } = require('./indice');

// Casos de teste
describe('Teste de Unidade - Maior e Menor Valor', () => {
  it('Deve retornar o maior e o menor valor corretamente', () => {
    const numeros = [10, 45, 27, 102, 68, 52, -99];

    // Chamando a função que calcula o maior e o menor valor
    const resultado = calcularMaiorMenor(numeros);

    // Verificando o resultado esperado
    expect(resultado).toEqual({
      maior: 102,
      indiceMaior: 3,
      menor: -99,
      indiceMenor: 6,
    });
  });
});
