const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', () => {

  it('deve registrar pagamento caro', () => {
    const servico = new ServicoDePagamento();

    servico.pagar('0987-7656-3475', 'Samar', 156.87);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.categoria, 'cara');
  });

  it('deve registrar pagamento padrão', () => {
    const servico = new ServicoDePagamento();

    servico.pagar('1234-5678', 'Empresa X', 50);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.categoria, 'padrão');
  });

  it('deve retornar o último pagamento realizado', () => {
    const servico = new ServicoDePagamento();

    servico.pagar('111', 'Empresa A', 20);
    servico.pagar('222', 'Empresa B', 200);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.codigoBarras, '222');
  });

});