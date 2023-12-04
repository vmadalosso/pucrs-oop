/* Teste para o método 'obterPilotoPorMatricula' do serviço 'ServicoPilotos'.

Este teste garante que o serviço de pilotos consiga recuperar um piloto específico 
com base na matrícula e que os dados desse piloto sejam corretos.

*/

const ServicoPilotos = require("./ServicoPilotos")
const Piloto = require("./Piloto")

describe("Serviço de Pilotos", () => {
  // Define um bloco de testes para o servico de pilotos
  test("Deve obter um piloto por matrícula corretamente", () => {
    // Verifica se o método 'obterPilotoPorMatricula' do 'ServicoPilotos' funciona corretamente.
    const servicoPilotos = new ServicoPilotos() // Cria uma instância do serviço de pilotos antes de cada teste, fornecendo um ambiente limpo para cada execução.
    const piloto = servicoPilotos.obterPilotoPorMatricula("003") // Chama o método 'obterPilotoPorMatricula' com a matrícula "003" e armazena o resultado na variável 'piloto'.
    expect(piloto).toBeInstanceOf(Piloto) // Teste de afirmação que verifica se o objeto retornado pelo método é uma instância da classe Piloto
    expect(piloto.nome).toBe("Dan Abramov") // Outro teste de afirmação que verifica se o nome do piloto retornado é "Dan Abramov".
    expect(piloto.habilitacao).toBe(true) // Outro teste de afirmação que verifica se a habilitação do piloto retornado é "true".
  })
})
