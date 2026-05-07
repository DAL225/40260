let resultado = document.getElementById("resultado")
let botones = document.getElementsByTagName("button")
for (const key in botones) {
    if (!Object.hasOwn(botones, key)) continue;
    
    const boton = botones[key];
    if(boton.className != "operadores")
        boton.addEventListener("click", escribeNum)
    else
        boton.addEventListener("click", operacion)

    console.log(boton)
}

function escribeNum(e) {
    console.log(e.target.innerText)
    resultado.value += e.target.innerText
}

let operadores = document.getElementsByClassName("operadores")
for (const key in operadores) {
    if (!Object.hasOwn(operadores, key)) continue;
    
    const boton = operadores[key];
    
    boton.addEventListener("click", operacion)
    console.log(boton)
}

function operacion(e){
    console.log(e.target.innerText)
    if (e.target.innerText == "+")
        suma()
    if (e.target.innerText == "=")
        igual()
}

let var1
let var2

function suma(){
    var1 = resultado.value
    resultado.value = null
    var2 = resultado.value
    console.log(var1+var2)
}

function igual(){
    var2 = resultado.value
    resultado.value = parseInt(var1) + parseInt(var2)
}