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
    if (e.target.innerText == "-")
        resta()
    if (e.target.innerText == "*")
        multiplicacion()
    if (e.target.innerText == "/")
        division()
    if (e.target.innerText == "C")
        limpiar()
    if (e.target.innerText == "=")
        igual()
}

let var1
let var2
let operacionActual

function suma(){
    var1 = resultado.value
    resultado.value = null
    var2 = resultado.value
    console.log(var1+var2)
    operacionActual = "+"
    console.log(operacionActual)
}

function resta(){
    var1 = resultado.value
    resultado.value = null
    var2 = resultado.value
    console.log(var1-var2)
    operacionActual = "-"
    console.log(operacionActual)
}

function multiplicacion(){
    var1 = resultado.value
    resultado.value = null
    var2 = resultado.value
    console.log(var1*var2)
    operacionActual = "*"
    console.log(operacionActual)
}

function division(){
    var1 = resultado.value
    resultado.value = null
    var2 = resultado.value
    console.log(var1/var2)
    operacionActual = "/"
    console.log(operacionActual)
}

function igual(){
    var2 = resultado.value
    if (operacionActual == "+")
        resultado.value = parseInt(var1) + parseInt(var2)
    if (operacionActual == "-")
        resultado.value = parseInt(var1) - parseInt(var2)
    if (operacionActual == "*")
        resultado.value = parseInt(var1) * parseInt(var2)
    if (operacionActual == "/")
        resultado.value = parseInt(var1) / parseInt(var2)
}

function limpiar(){
    var1 = null
    var2 = null
    resultado.value = null
}