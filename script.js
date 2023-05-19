let tempo = document.getElementById('tempo')
let pausa = document.getElementById('pausa')
let ciclo = document.getElementById('ciclo')
let segundos 

var bell = new  Audio("./audio/bell.mp3")
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

    localStorage.setItem('tempo',String(tempo.value))
    localStorage.setItem('pausa',String(pausa.value))
    localStorage.setItem('ciclo',String(ciclo.value))

    document.getElementById('config').style.setProperty('display','none', 'important')
    document.getElementById('timer').style.setProperty('display','block', 'important')
    
    naAcao()
    
    
   
    }


}

function naAcao(){

    let cicloValor = localStorage.getItem('ciclo')

    if( cicloValor != 1){
        document.getElementById('title_ciclo').innerHTML = cicloValor + ' ciclos restantes'

    } else{
        document.getElementById('title_ciclo').innerHTML = cicloValor + ' ciclo restante'
    }


    let title = document.getElementById('title')
    title.innerHTML = "AÇAO"
    title.style.fontSize = '25pt'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color','#28a745','important')

    // trabalhando com os minutos, como o localstorage esta como string
    // é necessario converter novamente para numero

    min = Number(localStorage.getItem('tempo'))
    min = (min - 1)
    segundos = 59

    document.getElementById('minutes_ok').innerHTML = min
    document.getElementById('seconds_ok').innerHTML = segundos

    var interMinuto = setInterval(timerMinuto, 60000)
    var interSegundo = setInterval(timerSegundo, 1000)

    function timerMinuto(){
        min = (min - 1)
        document.getElementById('minutes_ok').innerHTML = min
    }

    function timerSegundo(){
        segundos = (segundos - 1)
        document.getElementById('seconds_ok').innerHTML = segundos

        if(segundos <=0){
            if(min <=0){
                clearInterval(interMinuto)
                clearInterval(interSegundo)

                bell.play();

                naPausa()

            }
            segundos = 60
        }
    }



}





function naPausa(){

    let title = document.getElementById('title')
    title.innerHTML = "Pausado"
    title.style.fontSize = '25pt'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color','#dc3545','important')

    minPausa = Number(localStorage.getItem('pausa'))
    minPausa = (minPausa - 1) 
    segundos = 59

    document.getElementById('minutes_ok').innerHTML = minPausa
    document.getElementById('seconds_ok').innerHTML = segundos

    var interMinuto = setInterval(timerMinuto, 60000)
    var interSegundo = setInterval(timerSegundo, 1000)

    function timerMinuto(){
        minPausa = (minPausa - 1)
        document.getElementById('minutes_ok').innerHTML = minPausa
    }

    function timerSegundo(){
        segundos = (segundos - 1)
        document.getElementById('seconds_ok').innerHTML = segundos

        if(segundos <=0){
            if(minPausa <=0){
                sessao = Number(localStorage.getItem('ciclo'))
                sessao = (sessao - 1)
                localStorage.setItem('ciclo',string(sessao))

                clearInterval(interMinuto)
                clearInterval(interSegundo)

                if(sessao <=0){
                    final.play()
                    localStorage.clear()
                    document.getElementById('config').style.setProperty('display','none', 'important')
                    document.getElementById('timer').style.setProperty('display','none', 'important')
                    document.getElementById('fim').style.setProperty('display','block', 'important')
                }else {
                    volta.play();
                    naAcao()
                }

            }
            segundos = 60
        }

    }


}