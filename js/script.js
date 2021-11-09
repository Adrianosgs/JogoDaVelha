let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#button-container button')
let menssagemContainer = document.querySelector('#mensagem')
let mensagemTexto = document.querySelector('#mensagem p')
let choosePlayer

let player1 = 0
let player2 = 0

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function () {
    let el = checkel(player1, player2)

    //verificar se ja foi feito uma jogada
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true)

      this.appendChild(cloneEl)

      if (player1 == player2) {
        player1++

        if (selectPlayer == 'ai-players') {
          playInteligente()
          player2++
        }
      } else {
        player2++
      }

      checarJogador()
    }
  })
}

//eventos para definir o jogador para

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    selectPlayer = this.getAttribute('id')

    for (a = 0; a < buttons.length; a++) {
      buttons[a].style.display = 'none'
    }

    setTimeout(function () {
      let containers = document.querySelector('#container')
      containers.classList.remove('hide')
    }, 500)
  })
}

//verificar o jogador
function checkel(player1, player2) {
  if (player1 == player2) {
    el = x
  } else {
    el = o
  }
  return el
}

//chegar jogador que ganhou

function checarJogador() {
  let b1 = document.getElementById('block-1')
  let b2 = document.getElementById('block-2')
  let b3 = document.getElementById('block-3')
  let b4 = document.getElementById('block-4')
  let b5 = document.getElementById('block-5')
  let b6 = document.getElementById('block-6')
  let b7 = document.getElementById('block-7')
  let b8 = document.getElementById('block-8')
  let b9 = document.getElementById('block-9')

  //horizontal
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1child = b1.childNodes[0].className
    let b2child = b2.childNodes[0].className
    let b3child = b3.childNodes[0].className

    if (b1child == 'x' && b2child == 'x' && b3child == 'x') {
      declararVencedor('x')
    } else if (b1child == 'o' && b2child == 'o' && b3child == 'o') {
      declararVencedor('o')
    }
  }

  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4child = b4.childNodes[0].className
    let b5child = b5.childNodes[0].className
    let b6child = b6.childNodes[0].className

    if (b4child == 'x' && b5child == 'x' && b6child == 'x') {
      declararVencedor('x')
    } else if (b4child == 'o' && b5child == 'o' && b6child == 'o') {
      declararVencedor('o')
    }
  }

  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7child = b7.childNodes[0].className
    let b8child = b8.childNodes[0].className
    let b9child = b9.childNodes[0].className

    if (b7child == 'x' && b8child == 'x' && b9child == 'x') {
      declararVencedor('x')
    } else if (b7child == 'o' && b8child == 'o' && b9child == 'o') {
      declararVencedor('o')
    }
  }

  //posição vertical

  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1child = b1.childNodes[0].className
    let b4child = b4.childNodes[0].className
    let b7child = b7.childNodes[0].className

    if (b1child == 'x' && b4child == 'x' && b7child == 'x') {
      declararVencedor('x')
    } else if (b1child == 'o' && b4child == 'o' && b7child == 'o') {
      declararVencedor('o')
    }
  }

  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2child = b2.childNodes[0].className
    let b5child = b5.childNodes[0].className
    let b8child = b8.childNodes[0].className

    if (b2child == 'x' && b5child == 'x' && b8child == 'x') {
      declararVencedor('x')
    } else if (b2child == 'o' && b5child == 'o' && b8child == 'o') {
      declararVencedor('o')
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3child = b3.childNodes[0].className
    let b6child = b6.childNodes[0].className
    let b9child = b9.childNodes[0].className

    if (b3child == 'x' && b6child == 'x' && b9child == 'x') {
      declararVencedor('x')
    } else if (b3child == 'o' && b6child == 'o' && b9child == 'o') {
      declararVencedor('o')
    }
  }

  //Diagonal

  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1child = b1.childNodes[0].className
    let b5child = b5.childNodes[0].className
    let b9child = b9.childNodes[0].className

    if (b1child == 'x' && b5child == 'x' && b9child == 'x') {
      declararVencedor('x')
    } else if (b1child == 'o' && b5child == 'o' && b9child == 'o') {
      declararVencedor('o')
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3child = b3.childNodes[0].className
    let b5child = b5.childNodes[0].className
    let b7child = b7.childNodes[0].className

    if (b3child == 'x' && b5child == 'x' && b7child == 'x') {
      declararVencedor('x')
    } else if (b3child == 'o' && b5child == 'o' && b7child == 'o') {
      declararVencedor('o')
    }
  }

  //se deu velha

  let counter = 0

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++
    }

    if (counter == 9) {
      declararVencedor('Deu velha!')
    }
  }
}

//mostrar o vencedor e limpar o jogo

function declararVencedor(vencedor) {
  let scroreboardX = document.querySelector('#option1')
  let scroreboardY = document.querySelector('#option-2')
  let msg = ''

  if (vencedor == 'x') {
    scroreboardX.textContent = parseInt(scroreboardX.textContent) + 1
    msg = 'o Jogador 1 venceu'
  } else if (vencedor == 'o') {
    scroreboardY.textContent = parseInt(scroreboardY.textContent) + 1
    msg = 'o Jogador 2 venceu'
  } else {
    msg = 'Deu velha!'
  }

  mensagemTexto.innerHTML = msg
  menssagemContainer.classList.remove('hide')

  setTimeout(function () {
    menssagemContainer.classList.add('hide')
  }, 2000)

  //zerar o jogo

  player1 = 0
  player2 = 0

  //remover jogadas

  let removerJogadas = document.querySelectorAll('.box div')

  for (let i = 0; i < removerJogadas.length; i++) {
    removerJogadas[i].parentNode.removeChild(removerJogadas[i])
  }
}

function playInteligente() {
  let cloneO = o.cloneNode(true)
  counter = 0
  completo = 0

  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5)

    if (boxes[i].childNodes[0] == undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneO)
        counter++
        break
      }
      //verificar a qtd de casas preenchidas
    } else {
      completo++
    }
  }

  if (counter == 0 && completo < 9) {
    playInteligente()
  }
}
