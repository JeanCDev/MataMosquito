//altura
var altura = 0

//largura
var largura = 0

//vidas
var vidas = 1

//tempo 
var tempo = 15

//tempo do jogo
var criaMoscaTempo = 1500

//recuperar janela
var nivel = window.location.search
nivel = nivel.replace('?', '')

//definir nivel
if(nivel === 'normal'){
    criaMoscaTempo
} else if(nivel === 'dificil'){
    criaMoscaTempo = 1000
} else if(nivel === 'chuck'){
    criaMoscaTempo = 750
}

//cronometro
var cronometro = setInterval(
    function () {

        tempo -= 1

        if (tempo < 0) {
            clearInterval(cronometro)
            clearInterval(criaMosca)
            window.location.href = 'vitoria.html'
            //window.location.href= 'win.html'
        } else {
            document.getElementById('cronometro').innerHTML = tempo
        }
    }, 1000)

function ajusteTamanhoTela() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajusteTamanhoTela()

//Chamar funçao apos leitura do body
function posicaoAleatoria() {
    //remover mosquito caso exista
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas > 3) {
            window.location.href = 'gameOver.html'
        } else {
            document.getElementById('v' + vidas).src = "img/coracao_vazio.png"

            vidas++
        }

    }

    //criar elemento html
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //lógica do mosquito
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)

    console.log(tamanhoAleatorio(), ladoAleatorio())
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
