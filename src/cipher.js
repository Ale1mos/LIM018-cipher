const cipher = {
  encode(offset,string){
    offset = parseInt(offset);
    /*console.log("offset",typeof offset);
    console.log("string",string);

    console.log("metodoencode");*/
    var unir = "";
    //string.charCodeAt(0);
    //var a = string.charCodeAt(0);
    //console.log(a);
    for(var i = 0;i<string.length;i++){
      var a = string.charCodeAt(i);
      //console.log("a",a);
      var formula = (a-65+offset)%26+65;
      //console.log("formula",formula)
      var codificar = String.fromCharCode(formula);
      unir = unir + codificar;
      //console.log("unir",unir);
      
    }
    //console.log("codificar",codificar);
    return unir;
  },

  /*decode(offset,string){
    var b ="hola"
  }*/
  
};



/*var string= 
var offset=
var r ={
  color: "blue"

}
r.age=2;
r.movie="tratar"
console.log(r);*/


export default cipher;




