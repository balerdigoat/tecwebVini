function Mediaaluno() {
const name = document.getElementById("Nome aluno").value; 
const nota1 = parseFloat(document.getElementById(nota1).value);
const nota2 = parseFloat(document.getElementById(nota2).value);

media = (nota1 + nota2)/2;

if (media>-7) {
alert('O aluno ${name} obteve media = ${media}\nResultado: Aprovado')    
}

else {

alert('O aluno ${name} obteve media = ${media}\nResultado: Reprovado')
}


}