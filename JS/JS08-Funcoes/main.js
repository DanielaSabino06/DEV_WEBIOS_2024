// variaveis minuscul >>> var nome;

//funções maiusculo >>> function NomeAluno(){}

// Funções
function Contador(){
    // criar um averificação se o número digitado é par ou impar

    // se for impar, então vamos apresentar na tela todos os números impares de 1 até 50

    //Senão ( se for par) vamos apresentar na tela todos os números pares de 1 até 50

    let imparPar = 47
    let numero = 1


    if(imparPar % 2 === 1){
        console.log("Esse número é impar");
        for(numero; numero <= 50; numero++){
            if(numero % 2 ===1){
                console.log(numero);
            }
        }
    }else if(imparPar % 2 == 0){
        console.log("Esse número é par");

    }
}
//OBS: funções são sempre chamadas aocmpanhadas com paresnteses ()
console.log(Contador())
console.clear

// Arrow Function
let BoasVindas = () => {
    return 'Welcome Sofrendo com JS/TCC'
}
//funções e Arrow Function são sempre chamadas aocmpanhadas com paresnteses ()
 console.log(BoasVindas());

 //os parenteses servem para trazer valores que estão fora da função para dentro dela, assim conseguindo trabalhar com vários tipos de valores informado pelo usuario

 let Soma = (num1, num2) => {
    return num1 + num2
 }
 console.log(Soma(8,6))

 console.clear

 function Clique(){
    let cliques = 0;

    //return cliques ++;
    console.log(cliques = cliques)

 }

 console.log(Clique())

 let ChamaPopUp = () => {
    alert('Parabéns, você cliclou!')
 }

 let PasseMouse = () => {
    console.log('Sai daqui!!!!')
    //alert()
 }
