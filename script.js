function calculateCost() {
    // 1. Coleta os valores do formulário
    const goldTokensPrice = parseFloat(document.getElementById('goldTokensPrice').value);
    const qtyImbuements = parseInt(document.getElementById('qtyImbuements').value);
    const gtUsed = parseInt(document.getElementById('gtUsed').value);
    const itemsCost = parseFloat(document.getElementById('itemsCost').value);

    // Variáveis fixas do imbuement (Powerful = 20 horas)
    const DURATION_MINUTES = 1200; 
    const SERVICE_FEE_PER_IMBUE = 250000; 

    // 2. Calcula os componentes do custo
    
    // a) Valor Total de Gold Tokens
    const totalGtValue = gtUsed * goldTokensPrice;
    
    // b) Taxa de Serviço
    const totalServiceFee = qtyImbuements * SERVICE_FEE_PER_IMBUE;

    // c) Custo do Imbuement (considerando GTs OU Itens, o maior é usado, mas para simplificar vamos somar e o usuário deve colocar 0 em quem não usar)
    const costOfMaterials = totalGtValue + itemsCost; // Usuário escolhe: se usar GT, coloca o custo dos itens como 0. Se usar itens, coloca GTs como 0.
    
    // 3. Custo Total (GPs)
    const totalCost = costOfMaterials + totalServiceFee;
    
    // 4. Custo por Minuto
    const costPerMinute = totalCost / DURATION_MINUTES;

    // 5. Exibe os resultados na tela
    document.getElementById('totalCost').textContent = totalCost.toLocaleString('pt-BR');
    document.getElementById('costPerMinute').textContent = costPerMinute.toFixed(2).toLocaleString('pt-BR'); 
}
