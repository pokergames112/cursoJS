var area = window.document.getElementById("area")
var txt = window.document.querySelector("input#text")

function clicar(){
if(txt.value == "Brasil") {
    area.innerHTML = ("Você é Brasileiro")
} else{
    area.innerHTML = ("Você é Estrangeiro!")
}
}