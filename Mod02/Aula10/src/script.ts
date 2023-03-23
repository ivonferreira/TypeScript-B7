let idade: string| number | boolean = 90;

idade = "25"

function mostrarIdade(idade:string | number){//em função
    if(typeof idade ==='string'){
        console.log(idade.toUpperCase());
    }else{
    console.log('Minha idade é :'+idade);
    }
}
mostrarIdade(idade)