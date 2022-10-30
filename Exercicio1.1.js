//1.1 *Exercício Bônus que combinamos em aula* Faça um algoritmo que receberá 4 palavras diferentes de seu usuário e irá concatenar todas elas.

var palavra 
var frase = "A frase digitada é:"
for ( var contador = 0; contador < 4; contador ++ ){
palavra = (prompt("insira uma palavra"))
frase = frase + " " + palavra
}
console.log(frase)