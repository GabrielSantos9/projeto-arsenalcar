function valNumerosPositivos() {
  Swal.fire({
    title: "Erro!",
    text: "Por favor, insira números positivos.",
    icon: "error",
  });
}

function valCampoInvalido() {
  Swal.fire({
    title: "Erro!",
    text: "Por favor, preencha os campos do sorteio com números positivos e o número máximo deve ser maior que o número mínimo!",
    icon: "error",
  });
}

function valNumerosSorteados() {
  Swal.fire({
    title: "Atenção!",
    text: "Todos os números círculos foram preenchidos. Caso queira sortear novamente, por favor, reinicie o sorteio!",
    icon: "warning",
    footer:
      '<a href="https://gabrielsantos9.github.io/projeto-arsenalcar/">Reiniciar o sorteio</a>',
  });
}

function valMineMax() {
  Swal.fire({
    title: "Erro!",
    text: "O número máximo deve ser maior que o número mínimo.",
    icon: "error",
  });
}

function enableCampos() {
  document.querySelector("#numero-min").disabled = false;
  document.querySelector("#numero-max").disabled = false;
  document.querySelector("#quantidade").disabled = false;
}
