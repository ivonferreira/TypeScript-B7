function resumo(usuario: {nome:string, idade?:number}){
    if(usuario.idade !== undefined){
    return `Olá ${usuario.nome} você tem ${usuario.idade} anos de idade`
}else{
    return `Olá ${usuario.nome}`
}
}

let us = {nome:'Ivon'};

console.log(resumo(us));