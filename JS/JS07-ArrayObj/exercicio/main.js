let aluno = [
    {
        nome: "Ana",
        idade: 17,
        nota: 8,
        ano: "2B"
    },
    {
        nome: "Bruno",
        idade: 16,
        nota: 6,
        ano: "2C"
    },
    {
        nome: "Veronica",
        idade: 16,
        nota: 9,
        ano: "2C"
    },
    {
        nome: "Marta",
        idade: 15,
        nota: 5,
        ano: "3C"
    },
    {
        nome: "Brenno",
        idade: 19,
        nota: 6,
        ano: "3C"
    },
    {
        nome: "Maria",
        idade: 14,
        nota: 4,
        ano: "1F"
    }
]
console.log(aluno)
console.log(aluno[1])
console.log(aluno[5].nota)

let alunoJson = JSON.stringify(aluno)
console.log(alunoJson)