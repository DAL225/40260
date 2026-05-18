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
    if (e.target.innerText == "+" | e.target.innerText == "-" | e.target.innerText == "*" | e.target.innerText == "/")
        parametroAlmacenado(e)
    if (e.target.innerText == "C")
        limpiar()
    if (e.target.innerText == "=")
        igual()
}

let var1
let var2
let operacionActual

function parametroAlmacenado(e){
    parametros.push(resultado.value)
    eventos.push(resultado.value)
    resultado.value = null
    operacionActual = e.target.innerText
    eventos.push(operacionActual)
}

function igual(){
    let variable = null
    parametros.push(resultado.value)
    eventos.push(resultado.value)
    for (const key in parametros) {
        if (Object.prototype.hasOwnProperty.call(parametros, key)){
            const parametro = parametros[key]
            if (operacionActual == "+")
                variable += parseInt(parametro)
            if (operacionActual == "-")
                if (variable == null) {
                    variable = parseInt(parametro)
                } else {
                    variable -= parseInt(parametro)
                }
            if (operacionActual == "*")
                if (variable == null) {
                    variable = parseInt(parametro)
                } else {
                    variable *= parseInt(parametro)
                }
            if (operacionActual == "/")
                if (variable == null) {
                    variable = parseInt(parametro)
                } else {
                    variable /= parseInt(parametro)      
                }
        }
    }
    resultado.value = variable
}

function limpiar(){
    var1 = null
    var2 = null
    parametros = []
    resultado.value = null
}

let parametros = []
let eventos = []