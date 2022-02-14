function carregar(){
    var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
//var hora = data.getHours()
var hora = 12
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    //Bom dia
    img.innerHTML = '<img src="manha-250.png">'
} else if (hora >= 12 && < 18){
    //Boa tarde
    img.src = "tarde-250.png"
} else if {
    //Boa Noite
    img.src = "noite-250.png"
    }
}

