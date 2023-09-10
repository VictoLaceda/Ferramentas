var answer = window.prompt("\t=== URNA ELETRONIKA === \n Digite 1 para votar no Fulano(Liberalista) \n 2 para votar no Sicrano(Ancapistão) \n 3 para votar no DinDin(Comunisto) \n e 4 para votar no Toddynho(Liberal Revoltz) \n\n DIGITE 5 PARA NULO E 6 PARA VOTO EM BRANCO")
var cd1, cd2, cd3, cd4; cd1=0; cd2=0; cd3=0; cd4=0; cd5=0; cd6=0;
while ( answer != '0' ) {
    var answer = window.prompt("\t=== URNA ELETRONIKA === \n Digite 1 para votar no Fulano(Liberalista) \n 2 para votar no Sicrano(Ancapistão) \n 3 para votar no DinDin(Comunisto) \n e 4 para votar no Toddynho(Liberal Revoltz) \n\n DIGITE 5 PARA NULO E 6 PARA VOTO EM BRANCO\nDIGITE 0 PARA FINALIZAR O PROGRAMA")
    if ( answer == '1' ) {
        cd1 += 1
    }
    if ( answer == '2' ) {
        cd2 += 1
    }
    if ( answer == '3' ) {
        cd3 += 1
    }
    if ( answer == '4' ) {
        cd4 += 1
    }
    if ( answer == '5' ) {
        cd5 += 1
    }
    if ( answer == '6' ) {
        cd6 += 1
    }
}
function show(varvv){
    var n1 = document.write(varvv);
}
    