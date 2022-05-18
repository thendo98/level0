function numberToHourMinute(number){
    let hour = 0;
    let minutes = 0;

    while (number > 0) {
        if (number >= 60) {
            number -= 60;
            hour += 1;
        }
        else{
            minutes = number;
            break;
        }
    }
    return pluralSingular(hour, minutes);
}

function pluralSingular(hour, minutes){
    if (hour > 1 && minutes > 1 || hour == 0 || minutes == 0)
        return `${hour} hours, ${minutes} minutes`;
    if (hour <= 1 && minutes > 1)
        return `${ hour} hour, ${minutes} minutes`;
    if (hour > 1 && minutes <= 1)
        return `${hour} hours, ${minutes} minute`;
    return `${hour} hour, ${minutes} minute`;
}

console.log(numberToHourMinute(10));
console.log(numberToHourMinute(61));
console.log(numberToHourMinute(71));
console.log(numberToHourMinute(133));
console.log(numberToHourMinute(0));
console.log(numberToHourMinute(121));
