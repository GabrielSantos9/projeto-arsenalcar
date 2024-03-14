let numerosSorteados = [];

function sortear() {
  document.querySelector("#numero-min").disabled = true;
  document.querySelector("#numero-max").disabled = true;

  const numeroMin = Number(document.querySelector("#numero-min").value);
  const numeroMax = Number(document.querySelector("#numero-max").value);

  if (numeroMin < 0 || numeroMax < 0) {
    enableCampos();
    Swal.fire({
      title: "Erro!",
      text: "Por favor, insira números positivos.",
      icon: "error",
    });
    return;
  }

  if (numeroMin === 0 || (numeroMax === 0 && numeroMin === "") || numeroMax === "" ) {
    enableCampos();
    Swal.fire({
      title: "Erro!",
      text: "Por favor, preencha os campos do sorteio com números positivos e o número máximo deve ser maior que o número mínimo!",
      icon: "error",
    });
    return;
  }

  if (numeroMax <= numeroMin) {
    enableCampos();
    alert("O número máximo deve ser maior que o número mínimo.");
    return;
  }

  if (numerosSorteados.length === numeroMax - numeroMin + 1) {
    enableCampos();
    Swal.fire({
      title: "Calma calabreso!",
      text: "Todos os números possíveis foram sorteados. Caso queira sortear novamente, por favor, reinicie o sorteio (F5)!",
      icon: "warning",
    });
    return;
  }

  let numeroSorteado;

  do {
    numeroSorteado =
      Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;
  } while (numerosSorteados.includes(numeroSorteado));

  numerosSorteados.push(numeroSorteado);

  document.querySelector(".resultado-sorteio").innerHTML = numeroSorteado;

  const elementResultado = document.createElement("div");
  elementResultado.classList.add("resultado-valor");
  elementResultado.innerText = numeroSorteado;

  const elementResultadoValores = document.querySelector(".conteudo-historico");
  elementResultadoValores.appendChild(elementResultado);

  function enableCampos() {
    document.querySelector("#numero-min").disabled = false;
    document.querySelector("#numero-max").disabled = false;
  }
}

function iniciarModal(modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.add("mostrar");
  modal.addEventListener("click", (e) => {
    if (e.target.className == "fechar") {
      modal.classList.remove("mostrar");
    }
  });
}

const button = document.querySelector(".button");
button.addEventListener("click", () => iniciarModal("modal-sorteio"));
