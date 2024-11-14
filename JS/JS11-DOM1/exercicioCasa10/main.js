class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }
    contaPoupança() {
        this.salario -= this.salario * 0.015;
        return this.salario
    }
    contaCorrente() {
        this.salario -= this.salario * 0.036;
        return this.salario
    }
    contaEstudante() {
        this.salario -= this.salario * 0.012;
        return this.salario
    }
    imprimirDados() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Salário: ${this.salario}, Sexo: ${this.sexo}, Agência: ${this.agencia}, Conta: ${this.conta}, Número da Conta: ${this.numeroConta}`)
    }
}
let conta1 = new ContaBancaria('Natali', 27, 3100, 'Feminino', '2020', 'Poupança', '357191')
conta1.contaPoupança();
conta1.imprimirDados();

let conta2 = new ContaBancaria('André', 27, 1700, 'Masculino', '3064', 'Corrente', '245287')
conta2.contaCorrente();
conta2.imprimirDados();

let conta3 = new ContaBancaria('Bianca', 28, 2600, 'Feminino', '4521', 'Estudante', '421587')
conta3.contaEstudante();
conta3.imprimirDados();