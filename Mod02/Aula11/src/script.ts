//Através do type
//type User = {name:string,age:number}
interface User {name:string}
type Idade = string | number;
interface User {age:number}
let ida: Idade = '38';


function resume(user: User){
    return `Olá ${user.name}, você tem ${user.age} anos de idade`
}
resume({
    name: 'Ivon',
    age: 38
})