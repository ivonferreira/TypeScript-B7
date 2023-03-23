let nome: 'Ivon' = 'Ivon'
type Opcoes = {
    width:number,
    heigth:number
}


function mostrarTexto(texto:string, alinhamento: 'left'|'right'|'center'){
    return `<div style="text-align: ${alinhamento}">${texto}</div>`
}
mostrarTexto('Ivon','left')
mostrarTexto('Ivon','right')
//mostrarTexto('Ivon','Outro')

function temNome(nome: string): true | false{
    if(nome !== ''){
        return true
    }else{
        return false;
    }
}

function configurar(props: Opcoes| 'auto'){}

configurar({width:100, heigth:200})
configurar('auto')
//configurar('automatico'))