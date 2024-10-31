
// Array de objetos

let aluno = {
    nome: 'Manassés B', 
    idade: 12,
    altura: 1.56,
    Iscracha: true,
    Iscamisa: false,
    isPaciencia: true,
    isChora: true,
    cor: 'bege',
    notas: [10, 8, 9, 7, 8.5]
}

// retornar o objeto
console.log(aluno)

// retornar apenas o nome
console.log(`O nome do aluno é ${aluno.nome}`)
//concatena o objeto a frase

// retornar apenas se o aluno isChora
console.log(aluno.isChora)


console.log(`O  aluno é ${aluno.nome} chora demais? \n R: ${aluno.isChora}`)
//concatena o objeto a frase

// retorna apenas a nota 9 que está na posição 2
console.log(aluno.notas[2])

console.clear()

//array []       objetos {}
let IOS = [
    {
        nome: 'Manassés B', 
        idade: 12,
        altura: 1.56,
        Iscracha: true,
        Iscamisa: false,
        isPaciencia: true,
        isChora: true,
        cor: 'bege',
        notas: [10, 8, 9, 7, 8.5]
    },
    {
        nome: 'Daniela', 
        idade: 17,
        altura: 1.65,
        Iscracha: false,
        Iscamisa: true,
        isPaciencia: true,
        isChora: false,
        cor: 'branca',
        notas: [9, 10, 9, 6.5, 7.5]
    },

    {
        nome: 'Eduarda', 
        idade: 15,
        altura: 1.78,
        Iscracha: true,
        Iscamisa: true,
        isPaciencia: true,
        isChora: false,
        cor: 'rosa',
        notas: [9, 10, 9, 9, 9]
    }
]

//mostrar obj por completo

console.log(IOS)

//manipulando o array para aparecer só  a daniela que ta na posição 1
console.log(IOS[1])

//retornar apenas se a daniela esta usando a camisa e altura

console.log(IOS[1].Iscamisa, IOS[1].altura)

//mostrar todos q estao com cracha

// for(i =0; i < IOS.length; i++){
//     let login = IOS[i]
//     if(login.Iscracha = true){
//         console.log("O aluno tem cracha")
//         console.log(login.Iscracha)
//     }else{
//         console.log("Aluno não tem cracha")
//     }
// }

