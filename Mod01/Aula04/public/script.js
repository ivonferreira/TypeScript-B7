var numero1 = document.querySelector("#number1");
var numero2 = document.querySelector("#number2");
var botao = document.querySelector("#calcular");
var res = document.querySelector("#resultado");
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
