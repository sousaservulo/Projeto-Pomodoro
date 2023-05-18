let tempo = document.getElementById('tempo')
let pausa = document.getElementById('pausa')
let ciclo = document.getElementById('ciclo')
let segundos 

var som = new  Audio("./audio/conc.mp3")
var volta = new Audio("./audio/volta.mp3")
var final = new Audio("./audio/final.mp3")


var conc = document.getElementById('conc')
var pause = document.getElementById('pause')
var play = document.getElementById('play')

document.getElementById('timer').style.setProperty('display','none', 'important')

function iniciar(){
    if(tempo.value == 0){
        document.getElementById('erroTempo').innerHTML="Adicione os minutos"
        tempo.focus()
    } else if(pausa.value == 0){
        document.getElementById('erroPausa').innerHTML="Adicione a pausa"
        pausa.focus()
    } else if(ciclo.value == 0){
        document.getElementById('erroCiclo').innerHTML="Adicione os ciclos"
        ciclo.focus()
    } else {
        conc.play()
        pause.style.setProperty('display','block', 'important')
        
        document.getElementById('config').style.setProperty('display','none', 'important')
        document.getElementById('timer').style.setProperty('display','block', 'important')

        localStorage.setItem('tempo',string(acao.value))
        localStorage.setItem('pausa',string(pausa.value))
        localStorage.setItem('ciclo',string(ciclo.value))


    }


}