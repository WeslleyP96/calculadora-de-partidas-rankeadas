// Criação da Função
function calcularNivelRankeado(vitorias, derrotas) {
    // Cálculo do saldo
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de Decisão baseada no saldo de vitórias
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else { // Equivalente a maior ou igual a 101
        nivel = "Imortal";
    }

    // Retorna um objeto contendo os dois resultados necessários
    return { saldoVitorias, nivel };
}

// Execução da Função e Armazenamento em Variável
const resultado = calcularNivelRankeado(85, 15); 

// Saída
console.log(`O Herói tem ${resultado.saldoVitorias} vitórias e está no nível ${resultado.nivel}.`);