function valNumerosPositivos() {
  Swal.fire({
    title: "Erro!",
    text: "Por favor, insira números positivos.",
    icon: "error",
  });
};

function valCampoInvalido() {
  Swal.fire({
    title: "Erro!",
    text: "Por favor, preencha os campos do sorteio com números positivos e o número máximo deve ser maior que o número mínimo!",
    icon: "error",
  });
};

function valNumerosSorteados() {
  Swal.fire({
    title: "Atenção!",
    text: "Todos os números possíveis foram sorteados. Caso queira sortear novamente, por favor, reinicie o sorteio (F5)!",
    icon: "warning",
  });
};

function  valMineMax() {
  Swal.fire({
    title: "Erro!",
    text: "O número máximo deve ser maior que o número mínimo.",
    icon: "error",
  });
};
