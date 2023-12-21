function Calcular() {
    // Obter valores dos campos
    let trim1 = parseFloat(document.getElementById("trim1").value) || 0;
    let trim2 = parseFloat(document.getElementById("trim2").value) || 0;
    let trim3 = parseFloat(document.getElementById("trim3").value) || 0;
    let peso1 = parseFloat(document.getElementById("peso1").value) || 0.3; // Peso padrão: 3
    let peso2 = parseFloat(document.getElementById("peso2").value) || 0.3; // Peso padrão: 3
    let peso3 = parseFloat(document.getElementById("peso3").value) || 0.4; // Peso padrão: 4
    let mediaAlvo = parseFloat(document.getElementById("media").value);

    // Divide os pesos por 10 se forem maiores que 1
    peso1 = peso1 > 1 ? peso1 / 10 : peso1;
    peso2 = peso2 > 1 ? peso2 / 10 : peso2;
    peso3 = peso3 > 1 ? peso3 / 10 : peso3;

    // Calcula a média ponderada
    let nota = trim1 * peso1 + trim2 * peso2 + trim3 * peso3;
    let somaPesos = peso1 + peso2 + peso3;
    let media = somaPesos === 0 ? 0 : nota / somaPesos;

    // Exibe a nota dividida por 10
    let notaExibida = (nota).toFixed(2);

    // Atualiza o campo "nota" com o resultado
    document.getElementById("nota").textContent =  notaExibida;

    // Verifica a situação do aluno e calcula pontos faltantes
    if (media >= mediaAlvo) {
        document.getElementById("resultado").textContent = " Aprovado!";
    } else {
        let pontosFaltantes = (mediaAlvo * somaPesos - nota) ;
        document.getElementById("resultado").textContent = " Reprovado. ";
        document.getElementById("faltam").textContent = " Faltam " + pontosFaltantes.toFixed(2) + " pontos para passar de ano.";
    }
}


