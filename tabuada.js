
    function tabuada() {
    var numero = document.getElementById("numero").value;
    var tabuada = document.getElementById("tabuada");
    let resultado = "";
    for (var i = 1; i <= 10; i++) {
       
      
        resultado += i + " x " + numero + " = " + i * numero + "\n";
       
    console.log(resultado);
    }
    
    resultado += "\n";
 
    
    document.getElementById('saidaTabuada').innerText = resultado
}