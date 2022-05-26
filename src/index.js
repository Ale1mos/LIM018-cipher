import cipher from './cipher.js';


console.log(cipher);



var submit = document.getElementById("submit")
var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var welcome = document.getElementById("w")
var center = document.getElementById("center")
var user = document.getElementById("user")
var btnCifrar = document.getElementById("btnCifrar")
var btnDescifrar = document.getElementById("btnDescifrar")
var cifrada = document.getElementById("cifrada")
//var decode = document.getElementById("descifrada")
var come = document.getElementById("come")
var answer = document.getElementById("answer")


center.style.display = "none"

submit.addEventListener("click", function(){
    if(input1.value===""){
        alert("Ingresa tu usuario")
    }
    else if(input2.value===""){
        alert("Ingresa tu contraseña")    
    }
    else{
        welcome.style.display = "none"
        come.style.display = "none"
        center.style.display = "block"
        user.textContent = input1.value 
    }
})


btnCifrar.addEventListener("click", function(){
    /*center.style.display = "none"
    encode.style.display = "block"*/
    var offset = document.getElementById("offset").value;
    console.log(offset);
    var string = document.getElementById("string").value;
    console.log(string);

    cipher.encode(offset, string);

    //cifrada.textContent = unir.value
    center.style.display = "none"
    answer.style.display = "block"
    



})

btnDescifrar.addEventListener("click", function(){

    /*center.style.display = "none"
    decode.style.display = "block"*/
    var offset = document.getElementById("offset").value;
    console.log(offset);
    var string = document.getElementById("string").value;
    console.log(string);

    cipher.decode(offset, string);



})
/*cipher.encode(offset, string){
    return 
}*/

/*var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"*/
/*console.log(5)
console.log(string)*/
//string.charCodeAt()

//var offset = document.getElementById("number").value;
/*var offset = 3;
var string = "CAJA";

cipher.encode(offset, string);*/


