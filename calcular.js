function Calcular() {
    // Obter valores dos campos
    const trim1 = parseFloat(document.getElementById("trim1").value) || 0;
    const trim2 = parseFloat(document.getElementById("trim2").value) || 0;
    const trim3 = parseFloat(document.getElementById("trim3").value) || 0;
    let peso1 = parseFloat(document.getElementById("peso1").value) || 0.3; // Peso padrão: 3
    let peso2 = parseFloat(document.getElementById("peso2").value) || 0.3; // Peso padrão: 3
    let peso3 = parseFloat(document.getElementById("peso3").value) || 0.4; // Peso padrão: 4
    const mediaAlvo = parseFloat(document.getElementById("media").value);

    // Divide os pesos por 10 se forem maiores que 1
    peso1 = peso1 > 1 ? peso1 / 10 : peso1;
    peso2 = peso2 > 1 ? peso2 / 10 : peso2;
    peso3 = peso3 > 1 ? peso3 / 10 : peso3;

    // Calcula a média ponderada e atualiza o campo "nota" com o resultado formatado para duas casas decimais
    const nota = trim1 * peso1 + trim2 * peso2 + trim3 * peso3;
    document.getElementById("nota").textContent = nota.toFixed(2);

    // Verifica a situação do aluno e calcula pontos faltantes
    const somaPesos = peso1 + peso2 + peso3;
    const media = somaPesos === 0 ? 0 : nota / somaPesos;
    const pontosFaltantes = (mediaAlvo - nota)* peso3
    const resultadoMsg = media >= mediaAlvo ? "Aprovado!" : "Reprovado.";
    //const faltamMsg = media >= mediaAlvo ? "" : `Faltam ${Math.abs(pontosFaltantes.toFixed(2))} pontos para passar de ano.`;

    // Atualiza os campos de resultado
    document.getElementById("resultado").textContent = resultadoMsg;
  //  document.getElementById("faltam").textContent = faltamMsg;
}
