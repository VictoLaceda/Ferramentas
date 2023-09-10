//  faz o = funcionar
document.getElementById("ig").onclick = function() {
        document.getElementById("display").value = eval(document.getElementById("display").value)
    }
    //faz o C funcionar
document.getElementById("C").onclick = function() {
        document.getElementById('display').innerHTML = "";
    }
    //faz os botões funcionarem
document.querySelectorAll('.butao').forEach((x) => {
    if (x.innerHTML == '=' || x.innerHTML == 'C') {
        null
    } else {
        x.onclick = () => {
            document.getElementById("display").value = document.getElementById("display").value + x.innerHTML
        }
    }
})