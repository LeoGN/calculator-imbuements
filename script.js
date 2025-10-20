function calculateCost() {
    // 1. Coleta e Converte os valores do formulário (GARANTINDO QUE OS IDs ESTÃO CORRETOS)
    
    // parseFloat para preços (pode ter decimal) e tempo (teoricamente)
    const goldTokensPrice = parseFloat(document.getElementById('goldTokensPrice').value || 0);
    const timeSpentMinutes = parseFloat(document.getElementById('timeSpentMinutes').value || 0); 

    // parseInt para quantidades (devem ser inteiras)
    const qtyImbuements = parseInt(document.getElementById('qtyImbuements').value || 0);
    const gtUsed = parseInt(document.getElementById('gtUsed').value || 0);
    
    // Se o usuário deixar algum campo vazio, o '|| 0' garante que o valor seja zero, evitando o erro 'null'.

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
    
    // 4. Custo por Minuto
    const costPerMinute = baseTotalCost / DURATION_IMBUE_MINUTES;

    // 5. Custo Total Real com o Tempo Gasto informado pelo usuário
    const realTotalCost = costPerMinute * timeSpentMinutes;

    // 6. Exibe os resultados na tela (GARANTINDO QUE OS IDs DE SAÍDA ESTÃO CORRETOS)
    
    // Formata o número para exibição, facilitando a leitura (ex: 1.250.000)
    document.getElementById('baseTotalCost').textContent = baseTotalCost.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
    document.getElementById('costPerMinute').textContent = costPerMinute.toFixed(2).toLocaleString('pt-BR'); 
    document.getElementById('realTotalCost').textContent = realTotalCost.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
}
