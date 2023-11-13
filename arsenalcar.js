
function sortear() {
  const numeroMin = Number(document.querySelector('#numero-min').value)
  const numeroMax = Number(document.querySelector('#numero-max').value)
  const numeroSorteado = (Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin);
  var historico = {
    numero: numeroSorteado,
  }
  console.log(historico.numero)
  document.querySelector('.resultado-sorteio').innerHTML = numeroSorteado
}

