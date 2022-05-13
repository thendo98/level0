function areaOfTriangle(number1, number2, number3){
    let semiperimeter = (1/2)*(number1 + number2 + number3);
    let area = Math.sqrt(semiperimeter*(semiperimeter-number1)*(semiperimeter-number2)*(semiperimeter-number3));
    return area;
}

console.log(areaOfTriangle(3, 4, 5));

