function resumo(usuario: {nome:string, idade:number}){
    return `Olá ${usuario.nome} você tem ${usuario.idade} anos de idade`
}

let u = {nome:'Ivon', idade: 39};

console.log(resumo(u));