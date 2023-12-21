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

    // Atualiza o campo "nota" com o resultado (sem toFixed para manter precisão)
    document.getElementById("nota").textContent = (trim1 * peso1 + trim2 * peso2 + trim3 * peso3).toFixed(2);

    // Verifica a situação do aluno e calcula pontos faltantes
    const somaPesos = peso1 + peso2 + peso3;
    const pontosFaltantes = mediaAlvo * somaPesos - (trim1 * peso1 + trim2 * peso2 + trim3 * peso3);
    const resultadoMsg = (somaPesos === 0 || (trim1 * peso1 + trim2 * peso2 + trim3 * peso3) === 0) ? "Aprovado!" : "Reprovado.";
    const faltamMsg = (somaPesos === 0 || (trim1 * peso1 + trim2 * peso2 + trim3 * peso3) === 0) ? "" : `Faltam ${pontosFaltantes.toFixed(2)} pontos para passar de ano.`;

    // Atualiza os campos de resultado
    document.getElementById("resultado").textContent = resultadoMsg;
    document.getElementById("faltam").textContent = faltamMsg;
}
