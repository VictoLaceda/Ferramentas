//faz o = funcionar
document.getElementById("ig").onclick = function() {
    document.getElementById("saida").value = eval(document.getElementById("entrada").value)
}
//faz o C funcionar
document.getElementById("C").onclick = function() {
    document.getElementById('entrada').value = ''
    document.getElementById('saida').value = ''
}
//faz os botões funcionarem
document.querySelectorAll('.botao').forEach((x) => {
    if (x.innerHTML == '=' || x.innerHTML == 'C') {
        null
    } else {
        x.onclick = () => {
            document.getElementById("entrada").value = document.getElementById("entrada").value + x.innerHTML
            }
        }
})
