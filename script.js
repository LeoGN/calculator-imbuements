<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Imbuement</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <h1>⚔️ Custo de Imbuement (Tibia) 🛡️</h1>
    </header>
    <main>
        <div class="input-group">
            <label for="quantidade">Quantidade de Imbuements (1-3):</label>
            <input type="number" id="quantidade" min="1" max="3" value="1">
        </div>

        <div class="input-group">
            <label for="precoToken">Valor de 1 Gold Token (gp):</label>
            <input type="number" id="precoToken" placeholder="Ex: 18000" required>
        </div>

        <button id="calcularBtn">Calcular</button>

        <section id="resultado">
            <h2>Resultados:</h2>
            <p>Custo Total: <span id="resultadoTotal">0 gp</span></p>
            <p>Custo por Minuto: <span id="resultadoMinuto">0 gp/min</span></p>
        </section>
    </main>

    <script src="js/script.js"></script> 
    </body>
</html>
