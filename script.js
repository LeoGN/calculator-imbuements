/**
 * CALCULA O CUSTO POR MINUTO DE IMBUMENT NO TIBIA.
 * * @param {number} quantidadeImbuements - Número de imbuements a serem aplicados (1, 2 ou 3).
 * @param {number} precoGoldToken - Preço de um Gold Token em gold.
 * @returns {object} Um objeto contendo o custo total e o custo por minuto.
 */
function calcularCustoImbuement(quantidadeImbuements, precoGoldToken) {
    // 1. Definições de custos e duração (valores fixos do Tibia)
    const goldTokensPorImbuement = 20;
    const taxaBasePorImbuement = 250000; // 250k
    const duracaoHoras = 20;
    const duracaoMinutosPorImbuement = duracaoHoras * 60; // 1200 minutos

    // --- CÁLCULO DO CUSTO TOTAL (GP) ---

    // a) Custo dos Gold Tokens: quantidade * 20 tokens * preço unitário
    const custoTokens = quantidadeImbuements * goldTokensPorImbuement * precoGoldToken;

    // b) Custo da Taxa (Shrine Fee): quantidade * 250.000
    const custoTaxa = quantidadeImbuements * taxaBasePorImbuement;

    // c) Custo Total (Tokens + Taxa)
    const custoTotal = custoTokens + custoTaxa;

    // --- CÁLCULO DA DURAÇÃO E CUSTO POR MINUTO ---

    // d) Duração Total: quantidade * 1200 minutos
    const duracaoTotalMinutos = quantidadeImbuements * duracaoMinutosPorImbuement;

    // e) Custo por Minuto: Custo Total / Duração Total
    // O custo é arredondado para duas casas decimais para clareza
    const custoPorMinuto = custoTotal / duracaoTotalMinutos;
    const custoPorMinutoArredondado = parseFloat(custoPorMinuto.toFixed(2));


    return {
        custoTotal: custoTotal,
        duracaoTotalMinutos: duracaoTotalMinutos,
        custoPorMinuto: custoPorMinutoArredondado
    };
}

// O restante deste arquivo (funções para ler o HTML e exibir o resultado)
// deve ser adicionado por você. Exemplo de como usar a função:
/*
document.getElementById('calcularBtn').addEventListener('click', () => {
    const qtde = parseInt(document.getElementById('quantidade').value);
    const preco = parseInt(document.getElementById('precoToken').value);

    if (qtde > 0 && preco > 0) {
        const resultado = calcularCustoImbuement(qtde, preco);
        document.getElementById('resultadoTotal').textContent = resultado.custoTotal.toLocaleString('pt-BR') + ' gp';
        document.getElementById('resultadoMinuto').textContent = resultado.custoPorMinuto.toLocaleString('pt-BR') + ' gp/min';
    } else {
        alert("Preencha todos os campos corretamente!");
    }
});
*/
