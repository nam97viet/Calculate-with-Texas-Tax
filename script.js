function checkDivisibility() {
    const number = document.getElementById('numberInput').value;
    const result = document.getElementById('result');
    
    if (number === "") {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return;
    }

    if (number%2==0) {
        result.textContent = `Yes, ${number} is divisible by 2.`;
        result.style.color = "green";
    } else {
        result.textContent = `No, ${number} is not divisible by 2.`;
        result.style.color = "red";
    }
}

function resetForm() {
    document.getElementById('numberInput').value = "";
    document.getElementById('result').textContent = "";
}
