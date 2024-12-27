function calculate() {
    const numberInput = document.getElementById("numberInput").value;
    const resultDiv = document.getElementById("result");

    // Convert the input to a number
    const number = parseFloat(numberInput);

    // Validate the input
    if (isNaN(number)) {
        resultDiv.innerHTML = "Please enter a valid number.";
        return null; // Return null if input is invalid
    }

    // Perform the tax calculation for Texas (example: 6.25% tax)
    const taxRate = 0.0825; // Texas state tax rate
    const tax = number * taxRate;
    const total = number + tax;

    // Display the results
    resultDiv.innerHTML = `
        <p>Entered Number: ${number.toFixed(2)}</p>
        <p>Tax (8.25%): ${tax.toFixed(2)}</p>
        <p>Total (Including Tax): ${total.toFixed(2)}</p>
    `;

    // Return the number value
    return number;
}

function resetForm() {
    document.getElementById("numberInput").value = "";
    document.getElementById("result").innerHTML = "";
}