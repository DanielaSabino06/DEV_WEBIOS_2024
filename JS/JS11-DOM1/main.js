//acessa o html

document.body.style.backgroundColor = "black"

document.title = "Socorro DOM"

// alterar o atributo lang (linguagem)
document.documentElement.lang = "pt-br"

//Criação de elementos com JS
let campoNovo = document.createElement('button')

// Inserir estilo dentro do html
campoNovo.style.backgroundColor = "orange"
campoNovo.style.borderRadius = '5px'

//informar em qual elemento queremos inserir o botão
document.body.appendChild(campoNovo).innerHTML = "Enviar"


// document.body.createElement('button').  //cria botão
// document.createElement('section')
// document.createElement('p')  //cria paragrafo
// document.createElement('img')  //cria img

