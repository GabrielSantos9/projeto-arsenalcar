let numerosSorteados = [];

function sortear() {
  document.querySelector("#numero-min").disabled = true;
  document.querySelector("#numero-max").disabled = true;
  document.querySelector("#qtd-numeros").disabled = true;

  const numeroMin = Number(document.querySelector("#numero-min").value);
  const numeroMax = Number(document.querySelector("#numero-max").value);
  const qtdNumeros = Number(document.querySelector("#qtd-numeros").value);

  if (numeroMin < 0 || numeroMax < 0) {
    alert("Por favor, insira números positivos.");
    return;
  }

  if (numeroMax <= numeroMin) {
    alert("O número máximo deve ser maior que o número mínimo.");
    return;
  }

  if (numerosSorteados.length === numeroMax - numeroMin + 1) {
    alert(
      "Todos os números possíveis foram sorteados. Caso queira sortear novamente, por favor, reinicie o sorteio (F5)!"
    );
    return;
  }

  if (numeroMin === 0 || numeroMax === 0) {
    alert("Por favor, preencha os campos do sorteio.");
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
