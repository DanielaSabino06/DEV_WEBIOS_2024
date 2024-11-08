// array
let frutas = ["morango", "banana", "kiwi", "maça", "manga", "mamao", "abacaxi", "abacate"] // colocar o nome de 8 frutas 

// percorrerr o array

// é o msm que  (=>  é function percorrer) (valor,     indice){

// frutas.forEach((valor, indice) => {
//     console.log(valor); 
//     console.log(indice);
// })


// frutas.forEach(percorrer)

             //conteudo      //indice numero
// function percorrer(valor,     indice){
//  console.log(valor); 
//  console.log(indice);
// }

// for (i = 0; i  <= frutas.length  ; i++){
// console.log(frutas[i]); // conteudo da posição (nomes)
// console.log(i) // número da posição
// }

// criar um array  de marca de celular com 6 posições

// objeto math.currently  retorna maior/ Math.max  retorna o mrior/ math.min  retorna o menot  / retorna raiz quadrada Math.sqrt
let numeros = [27, 94, 25, 6, 14, 325]


// trazer um novo array atualizado com a raiz quadreada de cada numero do array

let numerosDois = numeros.map(Math.sqrt)
//maior numero
let maiorNumero = Math.max.apply(Math, numeros)
// menor
let menorNumero = Math.min.apply(Math, numeros)

console.log(maiorNumero + " " + menorNumero);

// criando um novo array onde irá conter apenas numeros maiores ou iguais a 20 filtrando 

let filtraNumero = numeros.filter((valor) => {
    return valor >= 20

})
console.log(numeros)
console.log(filtraNumero)

console.clear()

//trabalhando com array de objeto

let tarefa = [
    {
        tarefa: "Dormir",
        isFeita: true
    },


    {
        tarefa: "limpar",
        isFeita: false
    },


    {
        tarefa: "torcer",
        isFeita: true
    }
]
 
//retornar apenas as tarefas que estão marcadas como true
//find
let retornaTrue = tarefa.filter((item) =>{
    return item.isFeita == true
    })
console.log(retornaTrue)






