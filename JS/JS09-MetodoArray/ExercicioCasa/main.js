console.log("atividade 1")
var atividade1 = [17, 43, 8, 4, 97, 56, 29]
atividade1.forEach(verificar)
function verificar(array){
    if (array % 2 ===0){
        console.log(`o numero ${array} é par`)
    } else{
        console.log(`o numero ${array} é impar`)
    }
}

console.log("___________________")
console.log("atividade 2")
var atividade2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61]
var filtrar = atividade2.filter((valor) => {
    return valor > 20 && valor  <80
})
console.log(filtrar)