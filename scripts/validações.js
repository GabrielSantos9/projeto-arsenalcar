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
    text: "Todos os números possíveis foram sorteados. Caso queira sortear novamente, por favor, reinicie o sorteio!",
    icon: "warning",
    footer:
      '<a href="http://127.0.0.1:5500/projeto-arsenalcar/">Reiniciar o sorteio</a>',
  });
}

function valMineMax() {
  Swal.fire({
    title: "Erro!",
    text: "O número máximo deve ser maior que o número mínimo.",
    icon: "error",
  });
}
