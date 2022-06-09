const cipher = {
  encode(offset,string){
    if(typeof offset != "number"){
      throw TypeError("No es numero")
    }
    if(typeof string != "string"){
      throw TypeError("No es letra")
    }
    
    if(string === string.toUpperCase()){
      var unirMayuscula = "";
    
    for(var j = 0;j<string.length;j++){
      var formulamayus = (string.charCodeAt(j)-65+offset)%26+65;
      var codificarmayus = String.fromCharCode(formulamayus);
      unirMayuscula = unirMayuscula + codificarmayus;
    }
    
    return unirMayuscula;
      // console.log(string.toUpperCase())
      // console.log(string.toLowerCase())
    }
    else{
      // console.log(string)
      string = string.toUpperCase();
      // console.log(string)
      var unir = "";
    
    for(var i = 0;i<string.length;i++){
      var a = string.charCodeAt(i);
      var formula = (a-65+offset)%26+65;
      var codificar = String.fromCharCode(formula);
      unir = unir + codificar;
    }
    
    return unir.toLowerCase();

    }
    
    
  },

    decode(offset,string){
      if(typeof offset != "number"){
        throw TypeError("No es numero")
      }
      if(typeof string != "string"){
        throw TypeError("No es letra")
      }
    // offset = parseInt(offset);
   if(string === string.toLowerCase()){
     string = string.toUpperCase()
    var unirminus = "";
    for(var j = 0;j<string.length;j++){
      // var a = string.charCodeAt(j);
      //console.log("a",a);
      var formulaminus = (string.charCodeAt(j)+65-offset)%26+65;
      //console.log("formula",formula)
      
      var codificarminus = String.fromCharCode(formulaminus);
      unirminus = unirminus + codificarminus;
      //console.log("unir",unir)
      
    }
    return unirminus.toLowerCase();
  }
  else{
    var unir = "";
    for(var i = 0;i<string.length;i++){
      var a = string.charCodeAt(i);
      //console.log("a",a);
      var formula = (a+65-offset)%26+65;
      //console.log("formula",formula)
      
      var codificar = String.fromCharCode(formula);
      unir = unir + codificar;
      //console.log("unir",unir)
      
    }
    return unir;

  }
     
   }
    
};

export default cipher;




