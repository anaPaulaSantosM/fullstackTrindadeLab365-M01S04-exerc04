class Conta {
    saldo = 0;
    #senha = 1234;
  
    constructor(saldoInicial, senha) {
      this.saldo = saldoInicial;
      this.#senha = senha;
    }
  
    get senha() {
      return this.#senha;
    }
  
    deposito(valor, senha) {
      this.#checkSenha(senha);
      this.saldo += valor;
    }
  
    retirada(valor) {
      if (valor > this.saldo) {
        throw new Error("Saldo insuficiente!");
      }
      this.saldo -= valor;
    }
  
    #checkSenha(senha) {
      if (senha !== this.#senha) {
        throw new Error("Senha incorreta. Tente novamente!");
      }
    }
  }

  class ContaPoupanca extends Conta {
      constructor (saldo){
        super(saldo);
      }

    atualizaJuros(saldo){
      this.saldoAtualizado = (saldo * 0.70)/100 + saldo;
    }
  }

  class PoupancaPremium extends ContaPoupanca {
      constructor (saldo){
        super(saldo);
      }

    atualizaJuros(saldo){
      this.saldoAtualizado = (saldo * 1.20)/100 + saldo;
    }
  }
  
  //const contaCorrente = new Conta(0, 1234);
  //contaCorrente.deposito(200, 1234);
  //contaCorrente.retirada(80);
  //console.log(contaCorrente.saldo);
  //const contaPoupanca = new ContaPoupanca(0,1234);
  //contaPoupanca.atualizaJuros(300);
  //console.log(contaPoupanca.saldoAtualizado);
  const contaPremium = new PoupancaPremium(0,1234);
  contaPremium.atualizaJuros(400);
  console.log(contaPremium.saldoAtualizado);