function calcularCustoPorMinuto() {
    // 1. Coletar os valores de entrada do HTML
    const qtdGoldTokens = parseFloat(document.getElementById('qtd_gt').value);
    const valorGoldToken = parseFloat(document.getElementById('valor_gt').value);
    const taxaImbuement = parseFloat(document.getElementById('taxa_imbuement').value);
    const duracaoHoras = parseFloat(document.getElementById('duracao_horas').value);
    const resultadoElement = document.getElementById('resultado');

    // 2. Validação básica das entradas
    if (isNaN(qtdGoldTokens) || isNaN(valorGoldToken) || isNaN(taxaImbuement) || isNaN(duracaoHoras) || duracaoHoras <= 0) {
        resultadoElement.textContent = "Por favor, insira valores numéricos válidos e uma duração maior que zero.";
        resultadoElement.style.color = "red";
        return;
    }

    // 3. Conversão e Cálculo

    // Duração total em minutos (20 horas é o padrão para Tier 3)
    const duracaoTotalMinutos = duracaoHoras * 60; 

    // Custo total dos Gold Tokens
    const custoGoldTokens = qtdGoldTokens * valorGoldToken;

    // Custo total do Imbuement (Gold Tokens + Taxa)
    const custoTotal = custoGoldTokens + taxaImbuement;

    // Custo por minuto
    const custoPorMinuto = custoTotal / duracaoTotalMinutos;

    // 4. Exibir o resultado
    
    // Formatação para exibir com casas decimais e separador de milhares
    const custoTotalFormatado = custoTotal.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
    const custoPorMinutoFormatado = custoPorMinuto.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    resultadoElement.style.color = "black";
    resultadoElement.innerHTML = `
        <br>
        <h2>Resultado do Custo do Imbuement</h2>
        <p><strong>Custo Total (GT + Taxa):</strong> ${custoTotalFormatado} gold pieces (gp)</p>
        <p><strong>Duração Total:</strong> ${duracaoTotalMinutos} minutos</p>
        <p><strong>Custo Gasto por Minuto:</strong> <span style="font-size: 1.2em; font-weight: bold; color: green;">${custoPorMinutoFormatado} gp/minuto</span></p>
    `;
}

// Opcional: Adiciona o cálculo da duração padrão (20 horas) ao carregar a página
document.addEventListener('DOMContentLoaded', (event) => {
    // Define 20 horas como padrão para Imbuement Tier 3
    document.getElementById('duracao_horas').value = 20; 
});