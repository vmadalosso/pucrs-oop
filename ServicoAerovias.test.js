/* Teste para o método 'obterAeroviaPorIdentificador' do serviço 'ServicoAerovias'.

Este teste garante que o serviço de aerovias consiga recuperar uma aerovia específica 
com base no identificador e que os dados dessa aerovia sejam corretos.

*/

const ServicoAerovias = require("./ServicoAerovias")
const Aerovia = require("./Aerovia")

describe("Serviço de Aerovias", () => {
  // Define um bloco de testes para o serviço de aerovias
  test("Deve obter uma aerovia por identificador corretamente", () => {
    // Verifica se o método 'obterAeroviaPorIdentificador' do 'ServicoAerovias' funciona corretamente.
    const servicoAerovias = new ServicoAerovias() // Cria uma instância do serviço de aerovias antes de cada teste.
    const aerovia = servicoAerovias.obterAeroviaPorIdentificador("POA-FLO") // Chama o método 'obterAeroviaPorIdentificador' com o identificador "POA-FLO" e armazena o resultado na variável 'aerovia'.
    expect(aerovia).toBeInstanceOf(Aerovia) // Teste de afirmação que verifica se o objeto retornado pelo método é uma instância da classe Aerovia.
    expect(aerovia.aeroportoOrigem).toBe("Porto Alegre") // Outro teste de afirmação que verifica se o aeroporto de origem da aerovia retornado é "Porto Alegre".
    expect(aerovia.tamanho).toBe(1000) // Outro teste de afirmação que verifica se o tamanho da aerovia retornado é 1000.
  })
})
