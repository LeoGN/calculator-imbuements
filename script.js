// O custo base de serviço (taxa do NPC) que será multiplicado pela quantidade de imbuements
const CUSTO_BASE_TAXA_POR_IMBUE = 250000;

function calcularCustoPorMinuto() {
    // 1. Coletar os valores de entrada do HTML
    const qtdGoldTokens = parseFloat(document.getElementById('qtd_gt').value);
    const valorGoldToken = parseFloat(document.getElementById('valor_gt').value);
    // A taxa de serviço manual (taxa_imbuement) é ignorada no cálculo, mas o campo é lido
    const duracaoHoras = parseFloat(document.getElementById('duracao_horas').value);
    
    // Campo crucial para a nova regra
    const qtdImbuements = parseInt(document.getElementById('qtd_imbuements').value);
    
    const resultadoElement = document.getElementById('resultado');

    // 2. Validação básica das entradas
    if (isNaN(qtdGoldTokens) || isNaN(valorGoldToken) || isNaN(duracaoHoras) || duracaoHoras <= 0 || isNaN(qtdImbuements) || qtdImbuements < 1) {
        resultadoElement.textContent = "Por favor, insira valores numéricos válidos (Quantidade de Imbuements deve ser no mínimo 1).";
        resultadoElement.style.color = "red";
        return;
    }

    // 3. Cálculo da Taxa Total do Serviço (NOVA REGRA)
    const taxaServicoTotal = CUSTO_BASE_TAXA_POR_IMBUE * qtdImbuements;

    // 4. Conversão e Cálculo

    // Duração total em minutos (multiplica pela quantidade de imbuements)
    const duracaoTotalMinutos = duracaoHoras * 60 * qtdImbuements; 

    // Custo total dos Gold Tokens (Material)
    // Custo por imbue * valor do GT * quantidade de imbuements
    const custoGoldTokensTotal = qtdGoldTokens * valorGoldToken * qtdImbuements;

    // Custo total final (Materiais totais + Taxa total de serviço)
    const custoTotal = custoGoldTokensTotal + taxaServicoTotal;

    // Custo por minuto 
    const custoPorMinuto = custoTotal / duracaoTotalMinutos;

    // 5. Exibir o resultado
    
    // Formatação
    const custoTotalFormatado = custoTotal.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
    const custoPorMinutoFormatado = custoPorMinuto.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const taxaServicoFormatada = taxaServicoTotal.toLocaleString('pt-BR', { maximumFractionDigits: 0 });

    resultadoElement.style.color = "black";
    resultadoElement.innerHTML = `
        <br>
        <h2>Resultado do Custo (Para ${qtdImbuements} Imbuement(s))</h2>
        <p><strong>Custo de Materiais (GT):</strong> ${custoGoldTokensTotal.toLocaleString('pt-BR')} gp</p>
        <p><strong>Taxa de Serviço Total (${CUSTO_BASE_TAXA_POR_IMBUE.toLocaleString('pt-BR')} gp/imbue):</strong> ${taxaServicoFormatada} gp</p>
        <p><strong>Custo Total Final:</strong> ${custoTotalFormatado} gold pieces (gp)</p>
        <p><strong>Duração Total:</strong> ${duracaoTotalMinutos} minutos</p>
        <p><strong>Custo Gasto por Minuto:</strong> <span style="font-size: 1.2em; font-weight: bold; color: green;">${custoPorMinutoFormatado} gp/minuto</span></p>
    `;
}

// Inicialização opcional: Define o valor padrão de 20 horas no campo de duração.
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('duracao_horas').value = 20; 
});
