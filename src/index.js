import cipher from './cipher.js';


console.log(cipher);



var submit = document.getElementById("submit")
var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var welcome = document.getElementById("w")
var center = document.getElementById("center")
var user = document.getElementById("user")
var ci = document.getElementById("ci")
var de = document.getElementById("de")
var cifrada = document.getElementById("cifrada")
var descifrada = document.getElementById("descifrada")


center.style.display = "none"

submit.addEventListener("click", function(){
    if(input1.value===""){
        alert("Ingresa tu usuario")
    }
    else 
    if(input2.value===""){
        alert("Ingresa tu contraseña")    
    }
    else{
        welcome.style.display = "none"
        center.style.display = "block"
        user.textContent = input1.value 
    }
})


ci.addEventListener("click", function(){

    center.style.display = "none"
    cifrada.style.display = "block"
})

de.addEventListener("click", function(){

    center.style.display = "none"
    descifrada.style.display = "block"
})



