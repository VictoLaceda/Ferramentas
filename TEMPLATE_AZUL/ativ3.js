
var soma = 0
var par = 0
var cont = 0

alert(":: APERTE ENTER ::")
while ( true ){
    
    var inpute = 0 
    inpute = prompt("Digite um numero: ")
    
    if (inpute % 2 == 0 ){ 
        par += 1
        soma += inpute 
    }
    
    if ( inpute == 0) {
         break 
    }
    
    cont += 1
    
    var media = 0
    var media = soma / cont
}