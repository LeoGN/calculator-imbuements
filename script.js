function calcularCustoImbuement(quantidade, precoGoldToken) {
    // Valores fixos
    const goldTokensPorImbuement = 20;
    const taxaBasePorImbuement = 250000;
    const duracaoMinutosPorImbuement = 1200; // 20 horas * 60 minutos

    // 1. Custo dos Gold Tokens
    const custoTokens = quantidade * goldTokensPorImbuement * precoGoldToken;

    // 2. Custo da Taxa
    const custoTaxa = quantidade * taxaBasePorImbuement;

    // 3. Custo Total
    const custoTotal = custoTokens + custoTaxa;

    // 4. Duração Total (em minutos)
    const duracaoTotalMinutos = quantidade * duracaoMinutosPorImbuement;

    // 5. Custo por Minuto
    const custoPorMinuto = custoTotal / duracaoTotalMinutos;

    return {
        custoTotal: custoTotal,
        custoPorMinuto: custoPorMinuto
    };
}

// Exemplo de chamada:
// const resultado = calcularCustoImbuement(3, 18000); 
// console.log("Custo Total: " + resultado.custoTotal); 
// console.log("Custo por Minuto: " + resultado.custoPorMinuto);
