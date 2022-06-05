const cipher = {
  encode(offset,string){
    if(typeof offset != "number"){
      throw TypeError("No es numero")
    }
    if(typeof string != "string"){
      throw TypeError("No es letra")
    }
    
    
    var unir = "";
    
    for(var i = 0;i<string.length;i++){
      var a = string.charCodeAt(i);
      var formula = (a-65+offset)%26+65;
      var codificar = String.fromCharCode(formula);
      unir = unir + codificar;
    }
    
    return unir;
  },

    decode(offset,string){
      if(typeof offset != "number"){
        throw TypeError("No es numero")
      }
      if(typeof string != "string"){
        throw TypeError("No es letra")
      }
    // offset = parseInt(offset);
   
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
};

export default cipher;




