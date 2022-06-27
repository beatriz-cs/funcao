//1 - crie uma função que exiba uma mensagem no console

function mensagem(){
    console.log("Desafio 4")
}

mensagem();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function nome(name){
    console.log(`Seja bem-vinda, ${name}!`)
 }

 nome("Beatriz")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function dados(name, age, music){
    console.log(`O meu nome é ${name}, tenho ${age} anos e gosto de ouvir ${music}!`)
 }

 dados("Beatriz", 23, "pop");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function about(movie, musica){
    console.log(`O meu filme favorito é ${movie} e a minha música preferida é ${musica}`)
}

about("Orgulho e preconceito", "Buzzcut season");

//*Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triple(triplo){
    return triplo * 3
}

console.log(triple(3));