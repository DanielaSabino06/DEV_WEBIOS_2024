// desntro de constructor é onde passa os parametros, caracteristicas do objeto
//criando classes

class Aluno {
    constructor (nome, ano, altura, isCracha, isCamisa, cor){
        this.nome = nome;
        this.ano = ano;
        this.altura = altura;
        this.isCracha = isCracha;
        this.isCamisa = isCamisa;
        this.cor = cor;
    
    }
    retornaIdade(){
    let dataCompleta = new Date();
    let pegaAno = dataCompleta.getFullYear()
    return pegaAno - this.ano 
    }
}
  
// classe no JS chamado Date -- retorna inform de datas de  acordo com o que está consfigurado no seu pc/servidor
// instancia == copias

let aluno1 = new Aluno("Luna", 2014, 1.63, true, true, "bege");
let aluno2 = new Aluno("Luiza", 2014, 1.65, true, true, "bege");
console.log(aluno1.idade)  // .info mostra apenas a propriedade que voc euqe mostrar 
console.log (`A idade da Luna é ${aluno1.retornaIdade()}`);
console.log(aluno2)
console.log (`A idade da Luiza é ${aluno2.retornaIdade()}`);


//metodos








