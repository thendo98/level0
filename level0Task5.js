function areaOfTriangle(number1, number2, number3){
    const semiPeriMeter = (1/2)*(number1 + number2 + number3);
    const area = Math.sqrt(semiPeriMeter*(semiPeriMeter-number1)*(semiPeriMeter-number2)*(semiPeriMeter-number3));
    return area;
}

console.log(areaOfTriangle(3, 4, 5));

