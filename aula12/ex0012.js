var agora = new Date()
var hora = agora.getHours()

if(hora < 12){
    console.log(`São ${hora}h, Bom dia!`)
} else if(hora >=12 && hora <=17){
    console.log(`São ${hora}h, Boa tarde!`)

} else{
    console.log(`São ${hora}h, Boa noite!`)
}