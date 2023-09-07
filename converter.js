document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convert");
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultDiv = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const selectedUnit = unitSelect.value;
        let convertedTemperature = 0;
        let convertedUnit = "";

        if (isNaN(temperature)) {
            resultDiv.innerText = "Please enter a valid number.";
            return;
        }

        if (selectedUnit === "celsius") {
            convertedTemperature = temperature;
            convertedUnit = "°C";
        } else if (selectedUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
            convertedUnit = "°F";
        } else if (selectedUnit === "kelvin") {
            convertedTemperature = temperature + 273.15;
            convertedUnit = "K";
        }

        resultDiv.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
    });
});
