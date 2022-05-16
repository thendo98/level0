function celsiusToFahrenheit (templnCelsius) {
    return templnCelsius * 1.8 + 32;
} 
function fahrenheitToCelsius(templnfahrenheit) {
    return (templnfahrenheit - 32) / 1.8;
}

console.log(celsiusToFahrenheit(45));
console.log(fahrenheitToCelsius(113));