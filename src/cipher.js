const cipher = {
  encode(offset,string){
    offset = parseInt(offset);
    
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
    offset = parseInt(offset);
   
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




