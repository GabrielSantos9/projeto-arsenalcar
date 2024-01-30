function sortear() {
  const numeroMin = Number(document.querySelector("#numero-min").value);
  const numeroMax = Number(document.querySelector("#numero-max").value);
  const numeroSorteado =
    Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;
  document.querySelector(".resultado-sorteio").innerHTML = numeroSorteado;

  const elementResultado = document.createElement("div");
  elementResultado.classList.add("resultado-valor");
  elementResultado.innerText = numeroSorteado;



  const elementResultadoValores = document.querySelector(".conteudo-historico");
  elementResultadoValores.append(elementResultado);
}

function mostrarHistorico() {
  // const elemento = document.querySelector("numero-sorteado");
  const container = document.getElementById("historicoTeste")
  if (container.style.display === "none") {
    container.style.display = "flex";
  } 
}