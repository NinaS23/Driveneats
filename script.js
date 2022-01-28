let comida
let bebida
let sobremesa
let valor1
let valor2
let valor3
function escolherFrango() {
  document.getElementById('frango').style.borderColor = '#32B72F'
  document.getElementById('camarão').style.borderColor = 'white'
  document.getElementById('strogonoff').style.borderColor = 'white'
  comida = 'frango'
  valor1 = 17.9
  finalizar()
}
function escolherCamarao() {
  document.getElementById('camarão').style.borderColor = '#32B72F'
  document.getElementById('frango').style.borderColor = 'white'
  document.getElementById('strogonoff').style.borderColor = 'white'
  comida = 'camarão'
  valor1 = 16.9
  finalizar()
}
function escolherStrogonoff() {
  document.getElementById('strogonoff').style.borderColor = '#32B72F'
  document.getElementById('frango').style.borderColor = 'white'
  document.getElementById('camarão').style.borderColor = 'white'
  comida = 'strogonoff'
  valor1 = 15.9
  finalizar()
}

function escolherLimão() {
  document.getElementById('limão').style.borderColor = '#32B72F'
  document.getElementById('laranja').style.borderColor = 'white'
  document.getElementById('sprite').style.borderColor = 'white'
  bebida = 'limão'
  valor2 = 11.9
  finalizar()
}
function escolherSprite() {
  document.getElementById('limão').style.borderColor = 'white'
  document.getElementById('laranja').style.borderColor = 'white'
  document.getElementById('sprite').style.borderColor = '#32B72F'
  bebida = 'sprite'
  valor2 = 10.9
  finalizar()
}
function escolherLaranja() {
  document.getElementById('limão').style.borderColor = 'white'
  document.getElementById('laranja').style.borderColor = '#32B72F'
  document.getElementById('sprite').style.borderColor = 'white'
  bebida = 'laranja'
  valor2 = 11.9
}

function escolherMusse() {
  document.getElementById('musse').style.borderColor = '#32B72F'
  document.getElementById('churrus').style.borderColor = 'white'
  document.getElementById('bolinho').style.borderColor = 'white'
  sobremesa = 'musse'
  valor3 = 16.6
  finalizar()
}
function escolherChurrus() {
  document.getElementById('musse').style.borderColor = 'white'
  document.getElementById('churrus').style.borderColor = '#32B72F'
  document.getElementById('bolinho').style.borderColor = 'white'
  sobremesa = 'churrus'
  valor3 = 15.9
  finalizar()
}
function escolherBolinho() {
  document.getElementById('musse').style.borderColor = 'white'
  document.getElementById('churrus').style.borderColor = 'white'
  document.getElementById('bolinho').style.borderColor = '#32B72F'
  sobremesa = 'bolinho'
  valor3 = 14.9
  finalizar()
}

function finalizar() {
  if (comida && bebida && sobremesa) {
    document.getElementById('terminar').style.backgroundColor = '#32B72F'
  }
}
