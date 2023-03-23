function fazerRequisicao(url:string, method:'GET'| 'POST'){
    //...
}
// Com variavel
type Methods = 'GET'|'Post'
let url = 'https://www.google.com.br';
let method:Methods = 'GET'
fazerRequisicao(url, method)

//Com Objeto
type RequestDetails = {
    url: string,
    method: 'GET'|'POST'
}
let req: RequestDetails = {url:'https://www.google.com.br', method: 'GET'};

fazerRequisicao(req.url, req.method);
