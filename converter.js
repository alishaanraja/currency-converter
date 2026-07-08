document.getElementById('convertBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amountInput').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    const baseRatesInUSD = {
        "USD": 1,
        "EUR": 0.92,
        "GBP": 0.78,
        "PKR": 278.50
    };

    const amountInUSD = amount / baseRatesInUSD[from];
    const convertedAmount = amountInUSD * baseRatesInUSD[to];

    const formattedResult = convertedAmount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    document.getElementById('conversionResult').innerText = `${amount} ${from} = ${formattedResult} ${to}`;
});
