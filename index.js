import cipher from './cipher.js';


//console.log(cipher);




var submit = document.getElementById("submit")
var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var welcome = document.getElementById("w")
var center = document.getElementById("center")
var user = document.getElementById("user")
var btnCifrar = document.getElementById("btnCifrar")
var btnDescifrar = document.getElementById("btnDescifrar")
var cifrada = document.getElementById("cifrada")
var descifrada = document.getElementById("descifrada")
var come = document.getElementById("come")
var answer = document.getElementById("answer")
var offset = document.getElementById("offset")
var string = document.getElementById("string")

   
center.style.display = "none"
answer.style.display = "none"
come.style.display = "none"


submit.addEventListener("click", function(){
    if(input1.value===""){
        alert("Ingresa tu usuario")
    }
    else if(input2.value===""){
        alert("Ingresa tu contraseña")    
    }
    else{
        welcome.style.display = "none"
        center.style.display = "block"
        user.textContent = input1.value 
        offset.value = "";
        string.value = "";
    }
})


btnCifrar.addEventListener("click", function(){

    var offset = parseInt(document.getElementById("offset").value);
    //console.log(offset);
    var string = document.getElementById("string").value;
    //console.log(string);

    //cipher.encode(offset, string);

    
    let e = cipher.encode(offset, string);
    //console.log(e)
    cifrada.innerHTML = `${e}`;

    center.style.display = "none"
    come.style.display = "block"
    answer.style.display = "block"
    
})

btnDescifrar.addEventListener("click", function(){

    var offset = parseInt(document.getElementById("offset").value);
    // var offset = document.getElementById("offset").value;
    //console.log(offset);
    var string = document.getElementById("string").value;
    console.log(string);

    //cipher.decode(offset, string);

    let u = cipher.decode(offset, string);
    //console.log(u)
    descifrada.innerHTML = `${u}`;

    center.style.display = "none"
    come.style.display = "block"
    answer.style.display = "block"
    
})

come.addEventListener("click", function(){
    answer.style.display = "none"
    come.style.display = "none"
    welcome.style.display = "flex"

    input1.value = "";
    input2.value = "";
    
    cifrada.textContent = "";
    descifrada.textContent = "";
    

})





