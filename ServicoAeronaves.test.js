/* Teste para o método 'obterAeronavePorPrefixo' do serviço 'ServicoAeronaves'.

Este teste garante que o serviço de aeronaves consiga recuperar uma aeronave específica 
com base no prefixo e que os dados dessa aeronave sejam corretos.

*/

const ServicoAeronaves = require("./ServicoAeronaves")
const AeronaveParticular = require("./AeronaveParticular")

describe("Serviço de Aeronaves", () => {
  // Define um bloco de testes para o serviço de aeronaves
  test("Deve obter uma aeronave por prefixo corretamente", () => {
    // Verifica se o método 'obterAeronavePorPrefixo' do 'ServicoAeronaves' funciona corretamente.
    const servicoAeronaves = new ServicoAeronaves() // Cria uma instância do serviço de aeronaves antes de cada teste.
    const aeronave = servicoAeronaves.obterAeronavePorPrefixo("PR001") // Chama o método 'obterAeronavePorPrefixo' com o prefixo "PR001" e armazena o resultado na variável 'aeronave'.
    expect(aeronave).toBeInstanceOf(AeronaveParticular) // Teste de afirmação que verifica se o objeto retornado pelo método é uma instância da classe AeronaveParticular.
    expect(aeronave.getNomeEmpresaManutencao()).toBe("ManutençãoAero") // Outro teste de afirmação que verifica se o nome da empresa de manutenção da aeronave retornado é "ManutençãoAero".
    expect(aeronave.getVelocidadeCruzeiro()).toBe(400) // Outro teste de afirmação que verifica se a velocidade de cruzeiro da aeronave retornado é 400.
  })
})
