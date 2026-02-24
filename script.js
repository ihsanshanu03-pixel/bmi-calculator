const bmiCalculator = () => {
    const heightM = document.getElementById("height").value / 100;
    const weight = document.getElementById("weight").value;

    const result = weight / (heightM * 2)

    const resultN = document.getElementById("result")

    if (result < 18.5) {
        resultN.textContent = `Underweight. Your BMi: ${result.toFixed(2)}`
        resultN.style.color = "red"
    }
    else if (result >= 18.5 && result < 24.9) {
        resultN.textContent = `Healthy weight. Your BMi: ${result.toFixed(2)}`
        resultN.style.color = "green"

    }
    else if (result >= 25 && result < 29.9) {
        resultN.textContent = `OverWeight. Your BMi: ${result.toFixed(2)}`
        resultN.style.color = "red"

    }
    else if (result >= 30) {
        resultN.textContent = `Obesity. Your BMi: ${result.toFixed(2)}`
    }
    else {
        resultN.textContent = 'unavailable'
    }


}