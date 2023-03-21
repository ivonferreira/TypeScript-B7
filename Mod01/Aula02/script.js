let numero1 = document.querySelector("#number1");
let numero2 = document.querySelector("#number2");
let botao = document.querySelector("#calcular");
let res = document.querySelector("#resultado");

function calcular(n1,n2){//Por isso a necessidade do TS, nao deveria ser necessario converter para algo simple como uma soma
    if( typeof n1 == 'number' && typeof n2 == 'number'){
    return n1+n2;
    }else{
        return +n1 + +n2
    }
}

botao.addEventListener('click', () => {
    res.innerHTML = calcular(numero1.value, numero2.value)
})