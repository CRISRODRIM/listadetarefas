// estado da aplicação

const tarefas = []

// alteradores de estado de aplicação

function add(){
const input = document.querySelector("input")
const valor = input.value
tarefas.push (valor)
input.value = ""
render()}


// mostrar estado na tela
function render(){

const ul = document.querySelector("ul")
ul.innerHTML = null

tarefas.forEach(function(valor){

const li = document.createElement("li")
li.innerText = valor
ul.appendChild(li)
}) } 
//iniciar
render ()