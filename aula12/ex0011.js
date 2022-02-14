var idade = 100
if(idade < 16){
    console.log(`Você tem ${idade} anos, Não pode votar`)
} else if(idade < 18 || idade >=65 ){
    console.log(`Você tem ${idade} anos, já pode votar mas não é obrigatório`)
} else{
    console.log(`Você tem ${idade} anos, Voto obrigatório`)
}
