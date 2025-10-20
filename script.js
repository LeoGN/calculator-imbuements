function calculateCost() {
    // 1. Coleta os valores do formulário
    const goldTokensPrice = parseFloat(document.getElementById('goldTokensPrice').value);
    const qtyImbuements = parseInt(document.getElementById('qtyImbuements').value);
    const gtUsed = parseInt(document.getElementById('gtUsed').value);
    const timeSpentMinutes = parseFloat(document.getElementById('timeSpentMinutes').value); // Novo campo

    // Variáveis fixas do imbuement (Powerful = 20 horas)
    const DURATION_IMBUE_MINUTES = 1200; // Duração de 20 horas em minutos
    const SERVICE_FEE_PER_IMBUE = 250000; 

    // 2. Calcula os componentes do custo BASE (para 20 horas)
    
    // a) Valor Total de Gold Tokens
    const totalGtValue = gtUsed * goldTokensPrice;
    
    // b) Taxa de Serviço
    const totalServiceFee = qtyImbuements * SERVICE_FEE_PER_IMBUE;

    // 3. Custo Total BASE do Imbuement (para 20 horas)
    const baseTotalCost = totalGtValue + totalServiceFee;
    
    // 4. Custo por Minuto (calculado a partir do custo base de 20 horas)
    const costPerMinute = baseTotalCost / DURATION_IMBUE_MINUTES;

    // 5. Custo Total Real com o Tempo Gasto informado pelo usuário
    const realTotalCost = costPerMinute * timeSpentMinutes;

    // 6. Exibe os resultados na tela
    document.getElementById('baseTotalCost').textContent = baseTotalCost.toLocaleString('pt-BR');
    document.getElementById('costPerMinute').textContent = costPerMinute.toFixed(2).toLocaleString('pt-BR'); 
    document.getElementById('realTotalCost').textContent = realTotalCost.toLocaleString('pt-BR');
}
