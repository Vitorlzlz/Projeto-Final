function exemplo1() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let chute;
  let tentativas = 0;

  while (chute != numeroSecreto) {
    chute = prompt("Adivinhe o número secreto de 1 a 10:");
    tentativas++;

    if (chute == numeroSecreto) {
      alert("Parabéns! Você acertou em " + tentativas + " tentativa(s).");
    } else if (chute > numeroSecreto) {
      alert("O número secreto é menor.");
    } else {
      alert("O número secreto é maior.");
    }
  }
}

function exemplo2() {
  let nota1 = parseFloat(prompt("Digite a primeira nota:"));
  let nota2 = parseFloat(prompt("Digite a segunda nota:"));
  let media = (nota1 + nota2) / 2;

  if (!isNaN(media)) {
    alert("A média é: " + media.toFixed(2));
  } else {
    alert("Digite apenas números válidos.");
  }
}

function exemplo3() {
  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  let num2 = parseFloat(prompt("Digite o segundo número:"));
  let soma = num1 + num2;

  if (!isNaN(soma)) {
    alert("A soma é: " + soma);
  } else {
    alert("Digite apenas números válidos.");
  }
}
