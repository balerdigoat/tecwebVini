let tema = "";
let palavra = "";
let palavraEscondida = [];
let letrasTentadas = [];
let tentativasRestantes = 6;

function cadastrarPalavra() {
  tema = document.getElementById("tema").value.trim();
  palavra = document.getElementById("palavra").value.trim();

  if (tema === "" || palavra === "") {
    alert("Por favor, preencha o tema e a palavra.");
    return;
  }

  for (let i = 0; i < palavra.length; i++) {
    palavraEscondida.push("_");
  }

  document.getElementById("setup").style.display = "none";
  document.getElementById("game").style.display = "block";
  atualizarPalavraEscondida();
}

function atualizarPalavraEscondida() {
  document.getElementById("palavraEscondida").innerText = palavraEscondida.join(" ");
  document.getElementById("tentativas").innerText = "Tentativas Restantes: " + tentativasRestantes;
  document.getElementById("letrasTentadas").innerText = "Letras Tentadas: " + letrasTentadas.join(", ");
}

function adivinharLetra() {
  let letra = document.getElementById("letraDigitada").value.trim().toLowerCase();

  if (letra === "") {
    alert("Por favor, digite uma letra.");
    return;
  }

  if (letrasTentadas.includes(letra)) {
    alert("Você já tentou essa letra.");
    return;
  }

  letrasTentadas.push(letra);

  if (palavra.includes(letra)) {
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === letra) {
        palavraEscondida[i] = letra;
      }
    }
    document.getElementById("feedback").innerText = "Letra correta!";
  } else {
    tentativasRestantes--;
    document.getElementById("feedback").innerText = "Letra incorreta!";
  }

  atualizarPalavraEscondida();
  verificarFimDeJogo();
}

function verificarFimDeJogo() {
  if (tentativasRestantes === 0) {
    document.getElementById("feedback").innerText = "Você foi enforcado! A palavra era: " + palavra;
    document.getElementById("letraDigitada").disabled = true;
  }

  if (!palavraEscondida.includes("_")) {
    document.getElementById("feedback").innerText = "Parabéns! Você ganhou!";
    document.getElementById("letraDigitada").disabled = true;
  }
}

function novoJogo() {
  tema = "";
  palavra = "";
  palavraEscondida = [];
  letrasTentadas = [];
  tentativasRestantes = 6;
  document.getElementById("tema").value = "";
  document.getElementById("palavra").value = "";
  document.getElementById("letraDigitada").value = "";
  document.getElementById("setup").style.display = "block";
  document.getElementById("game").style.display = "none";
}
