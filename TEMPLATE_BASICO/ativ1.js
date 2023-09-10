alert("ADIRJGVIFJADIN X")
// ===============
var valor = 0; var count = 1;
// ===============
valor = Number.parseInt(prompt("[ COUNT: "+count+" ] Digite um valor"));
// ===============
while ( valor > 0 ){
    valor = Number.parseInt(prompt("[ COUNT: "+count+" ] Digite um valor \n -------------------------------------------- \n DIGITE VALOR MENOR QUE ZERO \nOU APERTE ENTER PARA FINALIZAR "));
    count++;
    var acum = 0; acum += valor;
}
// ===============
var media = 0; media = acum / count;
// ===============