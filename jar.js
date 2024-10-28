document.getElementById('calculate-btn').addEventListener('click', function() {
    const bcv = parseFloat(document.getElementById('bcv').value);
    const average = parseFloat(document.getElementById('average').value);
    const productPrice = parseFloat(document.getElementById('product-price').value);

    if (!isNaN(bcv) && !isNaN(average) && !isNaN(productPrice)) {
        // Calcular nuevo precio en dólares
        const newPrice = (productPrice * average) / bcv;
        document.getElementById('new-price').innerText = `$${newPrice.toFixed(2)}`;

        // Calcular precio en Bolívares
        const priceInBs = productPrice * average;
        document.getElementById('price-bs').innerText = `Bs. ${priceInBs.toFixed(2)}`;
    } else {
        alert("Por favor, ingresa todos los valores numéricos correctamente.");
    }
});
